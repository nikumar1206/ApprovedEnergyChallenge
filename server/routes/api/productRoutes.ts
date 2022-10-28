import { Router } from "express";
import { DI } from "../../setupDB";
const productRouter = Router();

productRouter.get("/", async (_, res) => {
	const products = await DI.productRepository.findAll({
		populate: ["buyer.id", "buyer.name"],
		filters: ["createdAt", "updatedAt"],
	});
	return res.json(products);
});

productRouter.post("/new", async (req, res) => {
	const newproduct = DI.productRepository.create(req.body);
	try {
		await DI.em.persistAndFlush(newproduct);
	} catch (error) {
		return res.json(error).status(400);
	}
	return res.json(newproduct).status(400);
});

productRouter.get("/:id", async (req, res) => {
	const product = await DI.productRepository.findOne({
		id: parseInt(req.params.id),
	});
	return res.json(product).status(400);
});

productRouter.patch("/:id", async (req, res) => {
	try {
		const product = await DI.productRepository.findOneOrFail({
			id: parseInt(req.params.id),
		});
		DI.em.assign(product!, { ...req.body }, { mergeObjects: true });
		await DI.em.flush();
		return res.json({
			success: `Successfully edited product with id ${req.params.id}`,
			product,
		});
	} catch (error) {
		return res.json({
			error: `Could not edit product with id ${req.params.id}`,
		});
	}
});

productRouter.delete("/:id", async (req, res) => {
	try {
		const product = await DI.productRepository.findOneOrFail({
			id: parseInt(req.params.id),
		});
		await DI.productRepository.removeAndFlush(product);
	} catch (error) {
		return res.json({
			error: `Could not find a product with an id of ${req.params.id}`,
		});
	}
	return res.json("Successfully deleted product!").status(400);
});

export default productRouter;
