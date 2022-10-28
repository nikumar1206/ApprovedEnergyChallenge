import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../utils/order_api";
const NewOrderForm = () => {
	const navigate = useNavigate();
	const [orderData, setorderData] = useState({
		quantity: "",
		purchaseDate: "",
		buyerId: "",
		productId: "",
	});

	const updateField = (field: string) => {
		return (e: React.FormEvent<HTMLInputElement>): void =>
			setorderData({ ...orderData, [field]: e.currentTarget.value });
	};
	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		await createOrder(orderData).then(() => navigate("/orders"));
	};

	return (
		<>
			<h1>Add order to database!</h1>
			<form className="add-customer-form" onSubmit={handleSubmit}>
				<label>
					Quantity
					<input
						type="text"
						value={orderData.quantity}
						onChange={updateField("name")}
					/>
				</label>
				<label>
					Purchase Date
					<input
						type="text"
						value={orderData.purchaseDate}
						onChange={updateField("type")}
					/>
				</label>
				<label>
					Buyer ID
					<input
						type="text"
						value={orderData.buyerId}
						onChange={updateField("price")}
					/>
				</label>
				<label>
					Product ID
					<input
						type="text"
						value={orderData.productId}
						onChange={updateField("expiration")}
					/>
				</label>

				<button type="submit">Create Order!</button>
			</form>
		</>
	);
};
export default NewOrderForm;
