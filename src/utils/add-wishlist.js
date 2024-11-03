import { getCookie, setCookie } from "./cookies";

const addWishlist = (_id) => {
	let wishlist = getCookie("wishlist");
	wishlist = wishlist ? JSON.parse(wishlist) : [];

	const productIndex = wishlist.findIndex(
		(product) => product.productId === _id,
	);
	if (productIndex !== -1) {
		// Remove product if it exists
		wishlist.splice(productIndex, 1);
	} else {
		// Add product if it doesn't exist
		const product = { productId: _id };
		wishlist.push(product);
	}

	setCookie("wishlist", JSON.stringify(wishlist));
};

export default addWishlist;
