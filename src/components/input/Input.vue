<script setup lang="ts">
import { TInputProps } from './types'
import { ETextTag, ETextWeight, ETextColor } from "../text/types"

import Text from "../text/Text.vue"

const props = defineProps<TInputProps>();

const emit = defineEmits(['update:modelValue']);

const handleInput = (event: KeyboardEvent) => {
    emit('update:modelValue', (event.target as HTMLInputElement).value);
}
</script>

<template>
    <div class="w-full flex flex-col">
        <label>
            <Text :tag="ETextTag.span" :weight="ETextWeight.light" :color="ETextColor.secondary">
                {{ props.label }}
            </Text>
        </label>
        <input class="pl-4 py-3 bg-[#EEF8FF] text-[#0170AE] border-b border-[#2FA6EA] outline-none"
            :value="String(props.modelValue)" @input="handleInput(($event as KeyboardEvent))" />
    </div>
</template>
