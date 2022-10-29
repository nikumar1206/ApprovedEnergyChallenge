import { Router } from "express";
import { DI } from "../../setupDB";
const productRouter = Router();

productRouter.get("/", async (_, res) => {
	const products = await DI.productRepository.findAll({
		populate: ["buyer"],
		filters: ["createdAt", "updatedAt"],
	});
	return res.json(products);
});

productRouter.post("/new", async (req, res) => {
	const newproduct = DI.productRepository.create(req.body);
	console.log(newproduct);

	try {
		await DI.em.persistAndFlush(newproduct);
	} catch (error) {
		return res.json(error).status(200);
	}
	return res.json(newproduct).status(200);
});

productRouter.get("/:id", async (req, res) => {
	try {
		const product = await DI.productRepository.findOneOrFail({
			id: parseInt(req.params.id),
		});
		return res.json(product).status(200);
	} catch (error) {
		return res.json({
			error: `Could not find product with id ${req.params.id}`,
		});
	}
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
	const product = await DI.productRepository.findOneOrFail({
		id: parseInt(req.params.id),
	});
	await DI.productRepository.removeAndFlush(product);
	return res.json("Successfully deleted product!").status(200);
});

export default productRouter;
