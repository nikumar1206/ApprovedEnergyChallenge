import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
	deleteProduct,
	fetchProduct,
	updateProduct,
} from "../../utils/product_api";
const EditProductForm = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [productData, setproductData] = useState({
		name: "",
		type: "",
		price: "",
		expiration: "",
	});
	useEffect(() => {
		fetchProduct(parseInt(id!)).then((res) => setproductData(res!.data));
	}, []);

	const updateField = (field: string) => {
		return (e: React.FormEvent<HTMLInputElement>): void =>
			setproductData({ ...productData, [field]: e.currentTarget.value });
	};
	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		await updateProduct(parseInt(id!), productData).then(() =>
			navigate("/products")
		);
	};
	const handleDelete = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		deleteProduct(parseInt(id!)).then(() => navigate("/products"));
	};
	return (
		<>
			<h1>Edit product id: {id}</h1>
			<form className="add-customer-form" onSubmit={handleSubmit}>
				<label>
					Name
					<input
						type="text"
						value={productData.name}
						onChange={updateField("name")}
					/>
				</label>
				<label>
					Type
					<input
						type="text"
						value={productData.type}
						onChange={updateField("type")}
					/>
				</label>
				<label>
					Price
					<input
						type="text"
						value={productData.price}
						onChange={updateField("price")}
					/>
				</label>
				<label>
					Expiration
					<input
						type="text"
						value={productData.expiration}
						onChange={updateField("expiration")}
					/>
				</label>

				<button type="submit">Update Product!</button>
				<button type="button" onClick={handleDelete}>
					Delete Product
				</button>
			</form>
		</>
	);
};
export default EditProductForm;
