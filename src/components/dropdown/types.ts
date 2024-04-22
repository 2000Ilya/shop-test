export type TItem = {
    id: number
    title: string
}

export type TDropdownProps = {
    label: string
    modelValue: string | null
    items: TItem[]
    placeholder?: string
    disabled?: boolean
}