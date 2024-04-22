<script setup lang="ts">
import { Ref, computed, inject, ref, watch } from 'vue';

import { IGetProductsResponse } from '../../api/contracts';

import Input from "../../components/input/Input.vue";
import { TItem } from '../../components/dropdown/types';
import Dropdown from "../../components/dropdown/Dropdown.vue";
import { EButtonVariants } from '../../components/button/types';
import Button from "../../components/button/Button.vue";
import { ETextColor, ETextTag, ETextWeight } from '../../components/text/types';
import Text from "../../components/text/Text.vue";

const { addCartItem } = inject('storeDispatcher') as { addCartItem: (id: number, quantity: number) => void };
const { products: productsProvider, isLoading, error } = inject<Ref<IGetProductsResponse>>('productsProvider');

const productId = ref(null);
const quantity = ref('0');

function resetForm() {
    productId.value = null;
    quantity.value = '0';
}

function handleSubmitForm(event: Event) {
    event.preventDefault();
    if (productId.value !== null && !isNaN(Number(quantity.value)) && Number(quantity.value) > 0) {
        addCartItem(productId.value, Number(quantity.value));
        resetForm();
    }
    resetForm();
}

const dropdownItems = computed(() => productsProvider?.value?.products || [] as TItem[])
</script>

<template>
    <form v-on:submit="handleSubmitForm" class="flex flex-col gap-y-10">
        <Dropdown :disabled="isLoading" v-model="productId" label="Выберите продукцию" :items="dropdownItems"
            placeholder="Нажмите для выбора товара" />
        <Input v-model="quantity" label="Введите количество" />
        <Button :disabled="isLoading" :variant="EButtonVariants.primary">
            <Text :tag="ETextTag.span" :weight="ETextWeight.normal" :color="ETextColor.primary">
                Добавить
            </Text>
        </Button>
    </form>
</template>