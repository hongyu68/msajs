const offset = function (el) {
    let _x = 0;
    let _y = 0;

    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - (el.tagName != 'BODY' ? el.scrollLeft : 0);
        _y += el.offsetTop - (el.tagName != 'BODY' ? el.scrollTop : 0);
        el = el.offsetParent;
    }

    return {
        top: _y,
        left: _x
    };
};

export default offset;
