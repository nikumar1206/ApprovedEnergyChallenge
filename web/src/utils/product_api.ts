import axios from "axios";

interface productData {
	name: string;
	type: string;
	price: string;
	expiration: Date;
}

export const fetchAllProducts = async () => {
	try {
		const data = await axios.get("/api/products");
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const fetchProduct = async (id: number) => {
	try {
		const data = await axios.get(`/api/products/${id}`);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const createProduct = async (product: productData) => {
	try {
		const data = await axios.post(`/api/products/`, product);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const updateProduct = async (id: number, product: productData) => {
	try {
		const data = await axios.post(`/api/products/${id}`, product);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const deleteProduct = async (id: number) => {
	try {
		const data = await axios.post(`/api/products/${id}`);
		return data;
	} catch (error) {
		console.log(error);
	}
};
