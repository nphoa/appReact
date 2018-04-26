import{combineReducers} from 'redux';
import product from './product.Reducer';
import plan from './plan.Reducer';
const appReducers = combineReducers({
	product:product,
	plan:plan
});

export default appReducers