import{combineReducers} from 'redux';
import product from './product.Reducer';
const appReducers = combineReducers({
	product:product
});

export default appReducers