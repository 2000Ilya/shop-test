<script setup lang="ts">
import { TTableListProps, TTableField } from "./types";
import Text from "../../components/text/Text.vue";
import { ETextColor, ETextWeight, ETextTag } from "../../components/text/types";

const tableFields: TTableField[] = [
    {
        name: 'Название товара',
        key: 'title',
        modifyValue: (value: string) => value,
        styleCell: 'text-start w-2/4'
    },
    {
        name: 'Количество',
        key: 'quantity',
        modifyValue: (value: number) => `${value} шт.`,
        styleCell: 'text-end w-1/4'
    },
    {
        name: 'Стоимость',
        key: 'price',
        modifyValue: (value: number) => value.toFixed(2),
        styleCell: 'text-end w-1/4'
    },
];

const props = defineProps<TTableListProps>();
</script>

<template>
    <table>
        <thead>
            <tr>
                <th v-for="field in tableFields" :key="field.key" :class="field.styleCell">
                    <Text :tag="ETextTag.span" :weight="ETextWeight.light" :color="ETextColor.accent">
                        {{ field.name }}
                    </Text>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in props.items">
                <td v-for="field in tableFields" :key="field.key" :class="field.styleCell">
                    <Text :tag="ETextTag.span" :weight="ETextWeight.light" :color="ETextColor.secondary">
                        {{ field.modifyValue(item[field.key]) }}
                    </Text>
                </td>
            </tr>
        </tbody>
    </table>
</template>
