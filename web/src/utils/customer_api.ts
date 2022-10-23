import axios from "axios";

interface customerData {
	name: string;
	email: string;
	address: string;
	phone: string;
}

export const fetchAllCustomers = async () => {
	try {
		const data = await axios.get("/api/customers");
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const fetchCustomer = async (id: number) => {
	try {
		const data = await axios.get(`/api/customers/${id}`);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const createCustomer = async (customer: customerData) => {
	try {
		const data = await axios.post(`/api/customers/`, customer);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const updateCustomer = async (id: number, customer: customerData) => {
	try {
		const data = await axios.post(`/api/customers/${id}`, customer);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const deleteCustomer = async (id: number) => {
	try {
		const data = await axios.post(`/api/customers/${id}`);
		return data;
	} catch (error) {
		console.log(error);
	}
};
