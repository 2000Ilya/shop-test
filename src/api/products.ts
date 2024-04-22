import { Ref } from "vue";
import { useGetRequest } from "../hooks/useGetRequest";
import { IGetProductsResponse, ISaveProductBody, ISaveProductsResponse } from "./contracts";
import { postRequest } from "../helpers/request";

const baseUrl = import.meta.env.VITE_SERVER_API_URL

export function getProducts() {
    return useGetRequest<Ref<IGetProductsResponse>>({ url: `${baseUrl}/products.php` });
}

export async function lazySaveProducts(body: ISaveProductBody): Promise<ISaveProductsResponse> {
    return postRequest(`${baseUrl}/save.php`, body);
}