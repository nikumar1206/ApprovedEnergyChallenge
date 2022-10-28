export type orderType = {
	quantity: string;
	purchaseDate: string;
	buyer: { key: string } | string;
	product: string;
};

export type customerType = {
	name: string;
	email: string;
	address: string;
	phone: string;
};

export type productType = {
	name: string;
	type: string;
	price: string;
	expiration: string;
};
