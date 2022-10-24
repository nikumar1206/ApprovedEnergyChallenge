import { Router } from "express";
import DI from "../../app";
const orderRouter = Router();

orderRouter.get("/", async (_, res) => {
	const orders = await DI.orderRepository.findAll();
	return res.json(orders);
});

orderRouter.post("/new", async (req, res) => {
	const newOrder = DI.orderRepository.create(req.body);

	newOrder.buyer = await DI.customerRepository.findOneOrFail({
		id: req.body.buyerId,
	});

	const product = await DI.productRepository.findOneOrFail({
		id: req.body.productId,
	});
	newOrder.product = product;

	product.buyer = newOrder.buyer;

	await DI.em.persistAndFlush(newOrder);
	return res.json(newOrder).status(400);
});

orderRouter.get("/:id", async (req, res) => {
	const customer = await DI.orderRepository.findOne({
		id: parseInt(req.params.id),
	});
	return res.json(customer).status(400);
});

orderRouter.patch("/:id", async (req, res) => {
	const customer = await DI.orderRepository.findOne({
		id: parseInt(req.params.id),
	});
	DI.em.assign(customer!, { ...req.body }, { mergeObjects: true });
	await DI.em.flush();
	return res.json("Successfully updated customer!").status(400);
});

orderRouter.delete("/:id", async (req, res) => {
	await DI.orderRepository.nativeDelete({ id: parseInt(req.params.id) });
	return res.json("Successfully deleted customer!").status(400);
});

export default orderRouter;
