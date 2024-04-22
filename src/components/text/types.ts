export enum ETextWeight {
    light = 'light',
    normal = 'normal'
}

export enum ETextColor {
    primary = 'primary',
    secondary = 'secondary',
    accent = 'accent'
}

export enum ETextTag {
    h1 = 'h1',
    div = 'div',
    p = 'p',
    span = 'span'
}

export type TTextProps = {
    tag: ETextTag;
    weight: ETextWeight;
    color: ETextColor;
}