import { Router } from "express";
import { DI } from "../../setupDB";
const customerRouter = Router();

customerRouter.get("/", async (_, res) => {
	const customers = await DI.customerRepository.findAll({
		populate: ["allOrders", "ownedProducts"],
	});
	return res.json(customers).status(200);
});

customerRouter.post("/new", async (req, res) => {
	const newCustomer = DI.customerRepository.create(req.body);
	await DI.em.persistAndFlush(newCustomer);
	return res.json(newCustomer).status(200);
});

customerRouter.get("/:id", async (req, res) => {
	const customer = await DI.customerRepository.findOne({
		id: parseInt(req.params.id),
	});
	return res.json(customer).status(200);
});

customerRouter.patch("/:id", async (req, res) => {
	const customer = await DI.customerRepository.findOneOrFail({
		id: parseInt(req.params.id),
	});
	DI.em.assign(customer, { ...req.body }, { mergeObjects: true });
	await DI.em.flush();
	return res.json("Successfully updated customer!").status(200);
});
customerRouter.delete("/:id", async (req, res) => {
	const customer = await DI.customerRepository.findOneOrFail({
		id: parseInt(req.params.id),
	});
	await DI.productRepository.removeAndFlush(customer);
	return res.json("Successfully deleted customer!").status(200);
});

export default customerRouter;
