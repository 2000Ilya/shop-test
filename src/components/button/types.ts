export enum EButtonVariants {
    primary = 'primary',
    secondary = 'secondary'
}

export type TButtonProps = {
    variant: EButtonVariants
    onClick?: () => void
    disabled?: boolean
}