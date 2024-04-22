import { TCartItem } from "../views/cart-page/CartPage.vue"

export interface IProduct {
    id: number
    title: string
    price: number
}

export interface ISaveProductBody {
    products: TCartItem[]
}

export interface IGetProductsResponse {
    products: IProduct[]
    success: boolean
}

export interface ISaveProductsResponse {
    code: string
    success: boolean
}