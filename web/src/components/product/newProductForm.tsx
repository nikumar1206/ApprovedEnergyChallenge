import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../utils/product_api";
import { productType } from "../../utils/types";
const NewProductForm = () => {
	const navigate = useNavigate();
	const [productData, setproductData] = useState<productType>({
		name: "",
		type: "",
		price: "",
		expiration: "",
	});

	const updateField = (field: string) => {
		return (e: React.FormEvent<HTMLInputElement>): void =>
			setproductData({ ...productData, [field]: e.currentTarget.value });
	};
	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		createProduct(productData).then(() => navigate("/products"));
	};

	return (
		<>
			<h1>Add product to database!</h1>
			<form className="add-customer-form" onSubmit={handleSubmit}>
				<label>
					Name
					<input
						type="text"
						value={productData.name}
						onChange={updateField("name")}
						required
					/>
				</label>
				<label>
					Type
					<input
						type="text"
						value={productData.type}
						onChange={updateField("type")}
						required
					/>
				</label>
				<label>
					Price
					<input
						type="text"
						value={productData.price}
						onChange={updateField("price")}
						required
					/>
				</label>
				<label>
					Expiration
					<input
						type="text"
						value={productData.expiration}
						onChange={updateField("expiration")}
						required
					/>
				</label>

				<button type="submit">Create Product!</button>
			</form>
		</>
	);
};
export default NewProductForm;
