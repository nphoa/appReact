import * as types from '../Constant/ActionType';



export const fetchAllProduct = (products) => {
	return {
		type:types.FETCH_ALL_PRODUCT,
		products:products
	}
}