import getOffset from './offset';
import getInlineOption from './getInlineOption';

export const getPositionIn = (el, defaultOffset, defaultPlacement) => {
    const windowHeight = window.innerHeight;
    const inlinePlacement = getInlineOption(el, 'placement');
    const additionalOffset = Number(
        getInlineOption(el, 'offset', defaultOffset)
    );
    const initPlacement = inlinePlacement || defaultPlacement;

    let triggerPoint = getOffset(el).top - windowHeight;

    switch (initPlacement) {
    case 'center-bottom':
        triggerPoint += el.offsetHeight / 2;
        break;
    case 'bottom-bottom':
        triggerPoint += el.offsetHeight;
        break;
    case 'top-center':
        triggerPoint += windowHeight / 2;
        break;
    case 'center-center':
        triggerPoint += windowHeight / 2 + el.offsetHeight / 2;
        break;
    case 'bottom-center':
        triggerPoint += windowHeight / 2 + el.offsetHeight;
        break;
    case 'top-top':
        triggerPoint += windowHeight;
        break;
    case 'bottom-top':
        triggerPoint += windowHeight + el.offsetHeight;
        break;
    case 'center-top':
        triggerPoint += windowHeight + el.offsetHeight / 2;
        break;
    case 'top-bottom':
    default:
        break;
    }

    return triggerPoint + additionalOffset;
};
