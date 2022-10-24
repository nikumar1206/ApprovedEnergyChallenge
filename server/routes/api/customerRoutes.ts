import { Router } from "express";
import DI from "../../app";
const customerRouter = Router();

customerRouter.get("/", async (_, res) => {
	const customers = await DI.customerRepository.findAll({
		populate: ["allOrders"],
	});
	return res.json(customers);
});

customerRouter.post("/new", async (req, res) => {
	const newCustomer = DI.customerRepository.create(req.body);

	await DI.em.persistAndFlush(newCustomer);
	return res.json(newCustomer).status(400);
});

customerRouter.get("/:id", async (req, res) => {
	const customer = await DI.customerRepository.findOne({
		id: parseInt(req.params.id),
	});
	return res.json(customer).status(400);
});

customerRouter.patch("/:id", async (req, res) => {
	const customer = await DI.customerRepository.findOne({
		id: parseInt(req.params.id),
	});
	DI.em.assign(customer!, { ...req.body }, { mergeObjects: true });
	await DI.em.flush();
	return res.json("Successfully updated customer!").status(400);
});
customerRouter.delete("/:id", async (req, res) => {
	await DI.customerRepository.nativeDelete({ id: parseInt(req.params.id) });
	return res.json("Successfully deleted customer!").status(400);
});

export default customerRouter;
