<script setup lang="ts">
import { ComputedRef, computed, provide, reactive } from "vue";

import { useCheckIfMobile } from "../../hooks/useCheckIfMobile";

import CartForm from "../../modules/cart-form/CartForm.vue";

import { getProducts, lazySaveProducts } from "../../api/products";
import MobileView from "./MobileView.vue";
import DesktopView, { TCartListItem } from "./DesktopView.vue";
import { ETextColor, ETextTag, ETextWeight } from "../../components/text/types";
import { EButtonVariants } from "../../components/button/types";
import Text from "../../components/text/Text.vue";
import ShortList from "../../modules/short-list/ShortList.vue";
import Button from "../../components/button/Button.vue";

export type TCartItem = {
    quantity: number,
    product_id: number
}

export type TCart = {
    cart: TCartItem[]
    order: string | null
}

const isMobile = useCheckIfMobile();

const store = reactive<TCart>({
    cart: [],
    order: null
});

function addCartItem(product_id: number, quantity: number) {
    const cartItem = store.cart.find(cartItem => cartItem.product_id === product_id);
    if (cartItem === undefined) {
        store.cart.push({ product_id, quantity });
    } else {
        cartItem.quantity += quantity;
    }
}

const { fetchedData: fetchedProductsData, isLoading, error } = getProducts();

const cartPrice = computed(() => {
    if (fetchedProductsData !== null) {
        return store.cart.reduce((sum, cartItem) => {
            const cartItemPrice = fetchedProductsData.value.products?.find(product => String(product.id) === String(cartItem.product_id))?.price as number;
            sum += cartItem.quantity * cartItemPrice;
            return sum
        }, 0);
    }
    return 0;
});

const cartList: ComputedRef<TCartListItem[]> = computed(() => {
    return store.cart.map(cartItem => {
        if (fetchedProductsData !== null) {
            const product = fetchedProductsData.value.products?.find(product => String(product.id) === String(cartItem.product_id));
            if (product) {
                return ({
                    title: product.title,
                    quantity: cartItem.quantity,
                    price: product.price
                });
            }
        }
    }).filter(item => item !== undefined) as TCartListItem[];
});

async function saveProducts() {
    const responseData = await lazySaveProducts({ products: store.cart });
    if (responseData.success) {
        store.order = responseData.code;
    }
}

function handleResetCart() {
    Object.assign(store, {
        cart: [],
        order: null
    });
}

provide('storeProvider', store);
provide('storeDispatcher', { addCartItem });
provide('productsProvider', { products: fetchedProductsData, isLoading, error });
</script>

<template>
    <main v-if="store.order === null" class="h-full p-4"
        :class="(isMobile !== null && isMobile ? 'flex flex-col gap-y-10' : 'grid grid-cols-3 gap-4')">
        <CartForm class='flex flex-col w-full' />
        <DesktopView v-if="isMobile !== null && !isMobile" :cart-price="cartPrice" :cart-list="cartList"
            :on-save-products="saveProducts" />
        <MobileView v-else-if="isMobile !== null && isMobile" :cart-price="cartPrice" :cart-list="cartList"
            :on-save-products="saveProducts" />
    </main>
    <main v-else class="h-full w-96 p-4 flex flex-col gap-y-10 m-auto">
        <Text :tag="ETextTag.span" :weight="ETextWeight.normal" :color="ETextColor.secondary">
            Ваш заказ {{ store.order }} сформирован
        </Text>
        <ShortList :items="cartList" />
        <Button class="max-w-96" :variant="EButtonVariants.secondary" :on-click="handleResetCart">
            <Text :tag="ETextTag.span" :weight="ETextWeight.normal" :color="ETextColor.primary">
                Оформить новый заказ
            </Text>
        </Button>
    </main>
</template>