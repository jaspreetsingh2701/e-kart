import axios from 'axios';

export const http = {
    get(url) {
        return axios
            .get(url)
            .then(({ data }) => {
                return { data };
            })
            .catch(e => {
                console.error(url, e);
                throw e;
            });
    },
    post(url, requestData) {
        return axios
            .post(url, requestData)
            .then(({ data }) => {
                return { data };
            })
            .catch(e => {
                console.error(url, e);
                throw e;
            });
    },
    put(url, requestData) {
        return axios
            .put(url, requestData)
            .then(({ data }) => {
                return { data };
            })
            .catch(e => {
                console.error(url, e);
                throw e;
            });
    }
};