const PREFIX = 'data-msa';

const defaultOptions = {
    offset: 200,
    delay: 0,
    easing: 'ease',
    duration: 800,
    startEvent: 'DOMContentLoaded',
    throttleDelay: 100,
    debounceDelay: 100,
    once: false,
    animatedClass: 'msa-animated',
    placement: 'top-bottom' // 相对元素自身位置-相对屏幕位置
};

export {
    PREFIX,
    defaultOptions
};
