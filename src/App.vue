<script setup lang="ts">
import { ETextColor, ETextTag, ETextWeight } from "./components/text/types";
import CartPage from "./views/cart-page/CartPage.vue"
import Text from "./components/text/Text.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="w-full bg-[#755858] py-4 pl-5">
      <Text :tag="ETextTag.h1" :weight="ETextWeight.normal" :color="ETextColor.primary">
        Test project
      </Text>
    </header>
    <CartPage class="flex-auto" />
    <footer class="bg-[#222222] py-3.5 px-3">
      <div class="flex items-end justify-end h-[224px]">
        <Text :tag="ETextTag.span" :weight="ETextWeight.normal" :color="ETextColor.primary">
          Very interesting tail
        </Text>
      </div>
    </footer>
  </div>
</template>
