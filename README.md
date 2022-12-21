# msajs

Animate on scroll library

## Installation

Import script, styles and initialize MSA:

```js
import MSA from "msajs";
import "msajs/dist/msa.css";
// ..
MSA.init();
```

## How to use it?

### 1. Initialize MSA:

```js
MSA.init();

// default setting
MSA.init({
    // 触发事件进行初始化
    startEvent: "DOMContentLoaded",
    // 执行动画添加的class
    animatedClassName: "msa-animated",
    // resize事件的debounce时间
    debounceDelay: 100,
    // scroll事件的throttle时间
    throttleDelay: 100,
    // 以下属性，也可以通过在元素上使用`data-msa-*`单独设置
    // 动画延迟执行时间
    delay: 0,
    // 动画执行函数
    easing: "ease",
    // 动画执行持续时间
    duration: 400,
    // 元素触发动画的距离original位置的偏移量(px)
    offset: 200,
    // 滚动的时候是否只执行一次动画
    once: false,
    // 元素执行动画对于自身以及窗口的位置
    placement: "top-bottom",
});
```

### 2. Set animation using data-msa attribute:

```html
<div data-msa="fade-up"></div>
```

And adjust behaviour by using `data-msa-*` attributes:

```html
<div
    data-msa="fade-up"
    data-msa-offset="200"
    data-msa-delay="50"
    data-msa-duration="1000"
    data-msa-easing="ease-in-out"
    data-msa-once="false"
    data-msa-placement="top-center"
></div>
```

## Recipes:

#### Adding custom animations:

```css
[data-msa="new-animation"] {
    opacity: 0;
    transition-property: transform, opacity;

    &.msa-animated {
        opacity: 1;
    }
}
```

Then use it in HTML:

```html
<div data-msa="new-animation"></div>
```

Note: If the animatedClass is not msa-animated, this will need to be overridden during initialization

#### Adding custom easing:

Similar to animations you can add custom easings:

```css
html {
    body[data-msa-easing="new-easing"] [data-msa],
    [data-msa][data-msa][data-msa-easing="new-easing"] {
        transition-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
    }
}
```

#### Customizing default animations distance

Default distance for built-in animations is 100px. As long as you're using SCSS though, you can override it:

```css
@import "node_modules/msajs/src/scss/index.scss";
:root {
    --distance: 2000px; // It has to be below import
}
```

## Predefined options

### Animations

-   Fade animations:

    -   fade-up
    -   fade-down
    -   fade-left
    -   fade-right
    -   fade-up-right
    -   fade-up-left
    -   fade-down-right
    -   fade-down-left

-   Flip animations:

    -   flip-up
    -   flip-down
    -   flip-left
    -   flip-right

-   Slide animations:

    -   slide-up
    -   slide-down
    -   slide-left
    -   slide-right

-   Zoom animations:
    -   zoom-in
    -   zoom-in-up
    -   zoom-in-down
    -   zoom-in-left
    -   zoom-in-right
    -   zoom-out
    -   zoom-out-up
    -   zoom-out-down
    -   zoom-out-left
    -   zoom-out-right

### placements:

-   top-bottom
-   top-center
-   top-top
-   center-bottom
-   center-center
-   center-top
-   bottom-bottom
-   bottom-center
-   bottom-top

### Easing functions:

-   linear
-   ease
-   ease-in
-   ease-out
-   ease-in-out
-   ease-in-back
-   ease-out-back
-   ease-in-out-back
-   ease-in-sine
-   ease-out-sine
-   ease-in-out-sine
-   ease-in-quad
-   ease-out-quad
-   ease-in-out-quad
-   ease-in-cubic
-   ease-out-cubic
-   ease-in-out-cubic
-   ease-in-quart
-   ease-out-quart
-   ease-in-out-quart

---
