import e from "cors";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteOrder, fetchOrder, updateOrder } from "../utils/order_api";
const EditOrderForm = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [orderData, setorderData] = useState({
		quantity: "",
		purchaseDate: "",
		buyer: { id: "n/a" },
		product: "",
	});
	useEffect(() => {
		fetchOrder(parseInt(id!)).then((res) => setorderData(res!.data));
	}, []);
	const updateField = (field: string) => {
		return (e: React.FormEvent<HTMLInputElement>): void =>
			setorderData({ ...orderData, [field]: e.currentTarget.value });
	};
	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		await updateOrder(parseInt(id!), orderData).then(() => navigate("/orders"));
	};
	const handleDelete = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		deleteOrder(parseInt(id!)).then(() => navigate("/orders"));
	};

	return (
		<>
			<h1>Edit order id: {id}</h1>
			{console.log(orderData)}
			<form className="add-customer-form" onSubmit={handleSubmit}>
				<label>
					Quantity
					<input
						type="text"
						value={orderData.quantity}
						onChange={updateField("quantity")}
					/>
				</label>
				<label>
					Purchase Date
					<input
						type="text"
						value={orderData.purchaseDate}
						onChange={updateField("purchaseDate")}
					/>
				</label>
				<label>
					Buyer ID
					<input
						type="text"
						value={orderData.buyer?.id}
						onChange={updateField("buyerId")}
					/>
				</label>
				<label>
					Product ID
					<input
						type="text"
						value={orderData.product}
						onChange={updateField("productId")}
					/>
				</label>

				<button type="submit">Edit Order!</button>
				<button type="button" onClick={handleDelete}>
					Delete Order
				</button>
			</form>
		</>
	);
};
export default EditOrderForm;
