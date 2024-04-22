export type TInputProps = {
    label: string
    modelValue: string
    validation?: (value: KeyboardEvent) => boolean
}