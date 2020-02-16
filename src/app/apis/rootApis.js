import { http } from '../utils/http';

export const rootApis = {
    requestProductsJSON() {
        const url = "https://api.myjson.com/bins/qzuzi";
        return http
            .get(url)
            .then(response => {
                return response.data;
            });
    },
};