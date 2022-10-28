import axios from "axios";

interface orderData {
	quantity: string;
	purchaseDate: string;
	buyerId: string;
	productId: string;
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
		const data = await axios.post(`/api/orders/new`, order);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const updateOrder = async (id: number, order: orderData) => {
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
