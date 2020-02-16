import HomeActionTypes from './HomeActionTypes';
import { rootApis } from '../apis/rootApis';

export const fetchProductsJSON = () => {
    return async (dispatch) => {
        dispatch({ type: HomeActionTypes.REQUEST_PRODUCTS_JSON });
        return rootApis.requestProductsJSON()
            .then((response) => {
                dispatch({ type: HomeActionTypes.RECEIVE_PRODUCTS_JSON, payload: { productsData: response } });
            }).catch(() => {
                dispatch({ type: HomeActionTypes.FAILED_PRODUCTS_JSON });
            });
    };
}

export default {
    fetchProductsJSON
}