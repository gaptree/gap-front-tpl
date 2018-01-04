import {type} from './type.js';

export function toFormData(data) {
    let fd;

    if (type(data) !== 'formdata') {
        let key;

        fd = new window.FormData();

        for (key in data) {
            if (data.hasOwnProperty(key)) {
                fd.append(key, data[key]);
            }
        }
    } else {
        fd = data;
    }

    return fd;
}
