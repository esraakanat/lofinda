export const initialCartState = {
	items: [],
	total: 0,
};

// Action Caller
export const addItem = (item) => ({
	type: "ADD_ITEM",
	payload: item,
});
export const removeItem = (id, price, quantity) => ({
	type: "REMOVE_ITEM",
	payload: { id, price, quantity },
});
export const clearCart = () => ({
	type: "CLEAR_CART",
});

export const increaseQuantity = (id, price) => ({
	type: "INCREASE_QUANTITY",
	payload: { id, price },
});
export const decreaseQuantity = (id, price) => ({
	type: "DECREASE_QUANTITY",
	payload: { id, price },
});

const shoppingCartReducer = (state, action) => {
	switch (action.type) {
		case "ADD_ITEM":
			const updatedTotal =
				state.total + action.payload.price * action.payload.quantity;
			return {
				...state,
				items: [...state.items, action.payload],
				total: updatedTotal,
			};
		case "REMOVE_ITEM":
			const filteredItems = state.items.filter(
				(item) => item.id !== action.payload.id,
			);
			const newTotal =
				state.total - action.payload.price * action.payload.quantity;
			console.log({
				ll: action.payload.quantity,
				kk: action.payload.price,
			});
			return {
				...state,
				items: filteredItems,
				total: newTotal,
			};
		case "INCREASE_QUANTITY":
			const increasedItems = state.items.map((item) => {
				if (item.id === parseInt(action.payload.id)) {
					const newQuantity = item.quantity + 1;
					return { ...item, quantity: newQuantity };
				}
				return item;
			});
			const increasedTotal = state.total + action.payload.price;
			return {
				...state,
				items: increasedItems,
				total: increasedTotal,
			};
		case "DECREASE_QUANTITY":
			const decreasedItems = state.items.map((item) => {
				if (item.id === action.payload.id && item.quantity > 0) {
					const newQuantity = item.quantity - 1;
					return { ...item, quantity: newQuantity };
				}
				return item;
			});
			const decreasedTotal = state.total - action.payload.price;
			return {
				...state,
				items: decreasedItems,
				total: state.total === 0 ? 0 : decreasedTotal,
			};
		case "CLEAR_CART":
			return {
				...state,
				items: [],
				total: 0,
			};
		default:
			return state;
	}
};

export default shoppingCartReducer;
