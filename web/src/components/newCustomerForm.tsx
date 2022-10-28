import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCustomer } from "../utils/customer_api";
const NewCustomerForm = () => {
	const navigate = useNavigate();
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
	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		await createCustomer(customerData).then(() => navigate("/customers"));
	};

	return (
		<>
			<h1>Add Product to database!</h1>
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

				<button type="submit">Create Customer!</button>
			</form>
		</>
	);
};
export default NewCustomerForm;
