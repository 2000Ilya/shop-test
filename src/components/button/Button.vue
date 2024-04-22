<script setup lang="ts">
import { computed } from 'vue';
import { TButtonProps, EButtonVariants } from './types'

const props = withDefaults(defineProps<TButtonProps>(), {
    onClick: () => { }
});

const variantsStyles = {
    [EButtonVariants.primary]: 'bg-[#2FA6EA] border border-black',
    [EButtonVariants.secondary]: 'bg-[#61A91A]',
}

const buttonStyles = computed(() => {
    let styles = `w-full py-2.5 ${variantsStyles[props.variant]} ${props.disabled ? 'opacity-40' : 'hover:opacity-90'}`;
    return styles;
})

function handleClick() {
    if (!props.disabled) {
        props.onClick();
    }
}
</script>

<template>
    <button :class="buttonStyles" @click="handleClick">
        <slot></slot>
    </button>
</template>
