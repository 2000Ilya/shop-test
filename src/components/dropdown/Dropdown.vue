<script setup lang="ts">
import { TDropdownProps } from './types';
import { ETextTag, ETextWeight, ETextColor } from "../text/types";

import Text from "../text/Text.vue";

const props = defineProps<TDropdownProps>();

const emit = defineEmits(['update:modelValue']);

const handleChangeDropdown = (text: number | string) => emit('update:modelValue', text);
</script>

<template>
    <div class="w-full flex flex-col">
        <label>
            <Text :tag="ETextTag.span" :weight="ETextWeight.light" :color="ETextColor.secondary">
                {{ props.label }}
            </Text>
        </label>
        <select :disabled="props.disabled"
            class="pl-4 py-3 bg-[#EEF8FF] text-[#0170AE] border-b border-[#2FA6EA] outline-none"
            @change="handleChangeDropdown(($event.target as HTMLSelectElement).value)">
            <option :value="null" :selected="null === props.modelValue">{{ props.placeholder }}</option>
            <option v-for="item in props.items" :key="item.id" :value="item.id"
                :selected="String(item.id) === props.modelValue">
                {{ item.title }}
            </option>
        </select>
    </div>
</template>
