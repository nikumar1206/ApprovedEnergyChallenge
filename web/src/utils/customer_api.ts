import axios from "axios";
interface customerData {
	name: string;
	email: string;
	address: string;
	phone: string;
}
axios.defaults.baseURL = "http://localhost:5001/";
export const fetchAllCustomers = async () => {
	try {
		const data = await axios.get("/api/customers/");
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
		console.log(customer);

		const data = await axios.post(`/api/customers/new`, customer);

		return data;
	} catch (error) {
		console.log(error);
	}
};

export const updateCustomer = async (id: number, customer: customerData) => {
	try {
		const data = await axios.patch(`/api/customers/${id}`, customer);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const deleteCustomer = async (id: number) => {
	try {
		const data = await axios.delete(`/api/customers/${id}`);
		return data;
	} catch (error) {
		console.log(error);
	}
};
