import axios from "axios";
import { orderType } from "./types";

export const fetchAllOrders = async () => {
	try {
		const data = await axios.get("/api/orders");
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const fetchOrder = async (id: number) => {
	try {
		const data = await axios.get(`/api/orders/${id}`);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const createOrder = async (order: orderType) => {
	try {
		const data = await axios.post(`/api/orders/new`, order);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const updateOrder = async (id: number, order: orderType) => {
	try {
		const data = await axios.patch(`/api/orders/${id}`, order);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const deleteOrder = async (id: number) => {
	try {
		const data = await axios.delete(`/api/orders/${id}`);
		return data;
	} catch (error) {
		console.log(error);
	}
};
