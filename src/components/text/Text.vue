<script setup lang="ts">
import { computed } from 'vue';
import { ETextColor, ETextWeight, TTextProps } from './types'

const props = defineProps<TTextProps>();

const colorVariants = {
    [ETextColor.primary]: 'text-[#FFFFFF]',
    [ETextColor.secondary]: 'text-[#222222]',
    [ETextColor.accent]: 'text-[#0170AE]',
}

const weightVariants = {
    [ETextWeight.normal]: 'font-normal',
    [ETextWeight.light]: 'font-light',
}

const textStyles = computed(() => {
    return `text-2xl ${weightVariants[props.weight]} ${colorVariants[props.color]}`;
})
</script>

<template>
    <component :is="props.tag" :class="textStyles">
        <slot></slot>
    </component>
</template>
