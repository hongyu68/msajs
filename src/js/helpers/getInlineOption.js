import { PREFIX } from './config';

export default (el, key, fallback) => {
    if (key) {
        key = `${PREFIX}-${key}`;
    } else {
        key = PREFIX;
    }

    const attr = el.getAttribute(key);

    if (typeof attr !== 'undefined') {
        if (attr === 'true') {
            return true;
        } if (attr === 'false') {
            return false;
        }
    }

    return attr || fallback || '';
};
