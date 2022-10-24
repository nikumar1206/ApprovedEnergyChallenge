import axios from "axios";

interface orderData {
	quantity: number;
	purchaseDate: Date;
}

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

export const createOrder = async (order: orderData) => {
	try {
		const data = await axios.post(`/api/orders/`, order);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const updateOrder = async (id: number, order: orderData) => {
	try {
		const data = await axios.post(`/api/orders/${id}`, order);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const deleteorder = async (id: number) => {
	try {
		const data = await axios.post(`/api/orders/${id}`);
		return data;
	} catch (error) {
		console.log(error);
	}
};
