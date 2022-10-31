import { Router } from "express";

import { DI } from "../../setupDB";
const orderRouter = Router();

orderRouter.get("/", async (_, res) => {
	const orders = await DI.orderRepository.findAll({
		populate: ["buyer", "product"],
		filters: ["createdAt", "updatedAt"],
	});
	return res.json(orders).status(200);
});

orderRouter.post("/new", async (req, res) => {
	const newOrder = DI.orderRepository.create(req.body);
	try {
		newOrder.buyer = await DI.customerRepository.findOneOrFail({
			id: req.body.buyer,
		});
		const product = await DI.productRepository.findOneOrFail({
			id: req.body.product,
		});
		newOrder.product = product;

		await DI.em.persistAndFlush(newOrder);
	} catch (error) {
		console.log(error);

		return res

			.json({ error: "Could not find either buyer or product" })
			.status(400);
	}

	return res.json(newOrder).status(200);
});

orderRouter.get("/:id", async (req, res) => {
	const order = await DI.orderRepository.findOne({
		id: parseInt(req.params.id),
	});
	return res.json(order).status(200);
});

orderRouter.patch("/:id", async (req, res) => {
	const order = await DI.orderRepository.findOneOrFail({
		id: parseInt(req.params.id),
	});
	DI.em.assign(order, { ...req.body }, { mergeObjects: true });
	await DI.em.flush();
	return res.json("Successfully updated order!").status(200);
});

orderRouter.delete("/:id", async (req, res) => {
	const order = await DI.orderRepository.findOneOrFail({
		id: parseInt(req.params.id),
	});
	await DI.orderRepository.removeAndFlush(order!);
	return res.json("Successfully deleted order!").status(200);
});

export default orderRouter;
