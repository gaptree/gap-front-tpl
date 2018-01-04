import {toFormData} from '../toFormData.js';

// https://developer.mozilla.org/en-US/docs/Web/API/FormData/get
// ie not support FormData.get()

test('json data to FormData', () => {
    const obj = {
        key: 'val'
    };

    const fd = toFormData(obj);
    expect(fd.get('key')).toBe('val'); // ie not support 
});
