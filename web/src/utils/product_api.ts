import axios from "axios";
import { productType } from "./types";

export const fetchAllProducts = async () => {
	try {
		const data = await axios.get("/api/products");
		{
			console.log(data.data);
		}
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

export const createProduct = async (product: productType) => {
	try {
		const data = await axios.post(`/api/products/new`, product);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const updateProduct = async (id: number, product: productType) => {
	try {
		const data = await axios.patch(`/api/products/${id}`, product);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const deleteProduct = async (id: number) => {
	try {
		const data = await axios.delete(`/api/products/${id}`);
		return data;
	} catch (error) {
		console.log(error);
	}
};
