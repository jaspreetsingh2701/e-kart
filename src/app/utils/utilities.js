export const sort_by = (field, reverse, primer) => {
    const key = primer ?
        function (x) {
            return primer(x, field)
        } :
        function (x) {
            return x[field]
        };

    reverse = !reverse ? 1 : -1;

    return function (a, b) {
        return (a = key(a), b = key(b), reverse * ((a > b) - (b > a)));
    }
}

export const setMinValue = (arr, key) => {
    return Math.min.apply(Math, arr.map((o) => Math.floor(o[key] / 100) * 100));
};

export const setMaxValue = (arr, key) => {
    return Math.max.apply(Math, arr.map((o) => Math.floor(o[key] / 100) * 100));
};

export const confirmationCallback = (cb, id, message = 'Are you sure?') => {
    if (id && window.confirm(message)) {
        cb(id);
    }
}