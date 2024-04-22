<script setup lang="ts">
import { ETextColor, ETextTag, ETextWeight } from "../../components/text/types";
import { EButtonVariants } from "../../components/button/types";

import Button from "../../components/button/Button.vue";
import Text from "../../components/text/Text.vue";
import TableList from "../../modules/table-list/TableList.vue";

export type TCartListItem = {
    title: string,
    quantity: number,
    price: number
}

export type TDesktopProps = {
    cartPrice: number
    cartList: TCartListItem[]
    onSaveProducts: () => void
}

const props = defineProps<TDesktopProps>()

function handleSaveProducts() {
    props.onSaveProducts();
}
</script>

<template>
    <div class="w-full h-full flex flex-col items-center gap-y-10 col-span-2">
        <div v-if="props.cartList.length > 0" class="w-full h-full flex flex-col gap-4 items-center justify-between">
            <TableList :items="props.cartList" class="w-full" />
            <div class="w-full flex flex-col gap-4 items-center">
                <div class="w-full flex flex-col items-end">
                    <hr class="w-full border-b border-[#0170AE]" />
                    <Text :tag="ETextTag.span" :weight="ETextWeight.normal" :color="ETextColor.secondary">
                        Итого: {{ props.cartPrice.toFixed(2) }}
                    </Text>
                </div>
                <Button :disabled="props.cartList.length === 0" class="max-w-96" :variant="EButtonVariants.secondary"
                    :on-click="handleSaveProducts">
                    <Text :tag="ETextTag.span" :weight="ETextWeight.normal" :color="ETextColor.primary">
                        Сохранить
                    </Text>
                </Button>
            </div>
        </div>
        <Text v-else :tag="ETextTag.span" :weight="ETextWeight.normal" :color="ETextColor.secondary">
            В корзине нет товаров
        </Text>
    </div>
</template>