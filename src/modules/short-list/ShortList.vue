<script setup lang="ts">
import { TShortListProps } from "./types"
import { ETextTag, ETextWeight, ETextColor } from "../../components/text/types"

import Text from "../../components/text/Text.vue"

const props = defineProps<TShortListProps>()
</script>

<template>
    <div v-for="item in props.items" class="flex flex-col gap-3.5">
        <Text :tag="ETextTag.div" :weight="ETextWeight.light" :color="ETextColor.secondary">
            {{ item.title }}
        </Text>
        <div class="flex flex-row justify-between">
            <Text :tag="ETextTag.span" :weight="ETextWeight.normal" :color="ETextColor.secondary">
                {{ item.quantity }} шт.
            </Text>
            <Text :tag="ETextTag.span" :weight="ETextWeight.normal" :color="ETextColor.secondary">
                {{ item.price.toFixed(2) }}
            </Text>
        </div>
    </div>
</template>
