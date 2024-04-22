export type TTableListItem = {
    title: string
    quantity: number
    price: number
}

export type TTableListProps = {
    items: TTableListItem[]
}

export type TTableField = {
    name: string,
    key: string,
    modifyValue: ((value: number) => string) | ((value: string) => string),
    styleCell: string
}