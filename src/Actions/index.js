import * as types from '../Constant/ActionType';



export const fetchAllProduct = (products) => {
	return {
		type:types.FETCH_ALL_PRODUCT,
		products:products
	}
}

export const fetchAllPlan = (plans) => {
	return {
		type:types.FETCH_ALL_PLAN,
		plans:plans
	}
}