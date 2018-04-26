import * as types from '../Constant/ActionType';

// import * as api from '../API/Product';

var initialState  = [];

var myReducer = (state = initialState,action) => {
	switch (action.type) {
		case types.FETCH_ALL_PLAN:
			state = action.plans;
			return [...state];
			break;
		default:
			//console.log(api.getAllProduct());
			return [...state];
			break;
	}
};

export default myReducer