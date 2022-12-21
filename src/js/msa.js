/*
 * 注：
 * 1. 不支持在startEvent之后，有重绘操作的场景
 * 2. 不支持有依赖anchor得场景
 * 3. TODO：禁用场景逻辑
 */
import styles from "./../scss/index.scss";
import _ from "lodash";
import { defaultOptions, PREFIX } from "./helpers/config";
import getInlineOption from "./helpers/getInlineOption.js";
import { getPositionIn } from "./helpers/getPositionIn.js";

// 所有添加动画得元素
let activeElements = [];
// 初始化后得options
let initOptions = {};

function show(el) {
    if (el.animated) {
        return;
    }

    el.node.classList.add(initOptions.animatedClass);
    // eslint-disable-next-line no-param-reassign
    el.animated = true;
}

function hide(el) {
    if (el.once || !el.animated) {
        return;
    }

    el.node.classList.remove(initOptions.animatedClass);
    // eslint-disable-next-line no-param-reassign
    el.animated = false;
}

// 重新计算posIn值 reCalcTop
function reCalcPosIn(els) {
    for (let i = 0, len = els.length; i < len; i++) {
        const el = els[i];
        el.posIn = getPositionIn(
            el.node,
            initOptions.offset,
            initOptions.placement
        );
    }
}

// 计算每个元素
function calcPositionToApplyClasses(els, scrollY) {
    for (let i = 0, len = els.length; i < len; i++) {
        const el = els[i];
        if (scrollY > el.posIn) {
            show(el);
        } else {
            hide(el);
        }
    }
}

function parseOptions(el) {
    return {
        node: el,
        posIn: getPositionIn(el, initOptions.offset, initOptions.placement),
        once: getInlineOption(el, "once", initOptions.once),
        animated: false,
    };
}

/**
 * @description: 初始化
 * @param {*} option
 */
function init(options) {

    initOptions = Object.assign(defaultOptions, options);

    function resizeEvent() {
        reCalcPosIn(activeElements);
        calcPositionToApplyClasses(activeElements, window.scrollY);
    }

    function scrollEvent() {
        calcPositionToApplyClasses(activeElements, window.scrollY);
    }

    document
        .querySelector("body")
        .setAttribute("data-msa-easing", initOptions.easing);

    document
        .querySelector("body")
        .setAttribute("data-msa-duration", initOptions.duration);

    document
        .querySelector("body")
        .setAttribute("data-msa-delay", initOptions.delay);

    window.addEventListener(defaultOptions.startEvent, () => {
        activeElements = [...document.querySelectorAll(`[${PREFIX}]`)].map(
            (el) => parseOptions(el)
        );

        calcPositionToApplyClasses(activeElements, window.scrollY);
    });

    window.addEventListener(
        "resize",
        _.debounce(resizeEvent, initOptions.debounceDelay, true)
    );

    window.addEventListener(
        "scroll",
        _.throttle(scrollEvent, initOptions.throttleDelay, true)
    );
}
export default {
    init,
};
