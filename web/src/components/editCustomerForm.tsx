import e from "cors";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
	deleteCustomer,
	fetchCustomer,
	updateCustomer,
} from "../utils/customer_api";
const EditCustomerForm = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		fetchCustomer(parseInt(id!)).then((res) => setCustomerData(res!.data));
	}, []);

	const [customerData, setCustomerData] = useState({
		name: "",
		email: "",
		phone: "",
		address: "",
	});

	const updateField = (field: string) => {
		return (e: React.FormEvent<HTMLInputElement>): void =>
			setCustomerData({ ...customerData, [field]: e.currentTarget.value });
	};

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		updateCustomer(parseInt(id!), customerData).then(() =>
			navigate("/customers")
		);
	};

	const handleDelete = () => {
		deleteCustomer(parseInt(id!)).then(() => navigate("/customers"));
	};

	return (
		<>
			<h1>Edit Customer id: {id}</h1>
			<form className="add-customer-form" onSubmit={handleSubmit}>
				<label>
					Name
					<input
						type="text"
						value={customerData.name}
						onChange={updateField("name")}
					/>
				</label>
				<label>
					Email
					<input
						type="text"
						value={customerData.email}
						onChange={updateField("email")}
					/>
				</label>
				<label>
					Address
					<input
						type="text"
						value={customerData.address}
						onChange={updateField("address")}
					/>
				</label>
				<label>
					Phone
					<input
						type="text"
						value={customerData.phone}
						onChange={updateField("phone")}
					/>
				</label>

				<button type="submit">Save Customer</button>
				<button type="button" onClick={handleDelete}>
					Delete Customer
				</button>
			</form>
		</>
	);
};
export default EditCustomerForm;
