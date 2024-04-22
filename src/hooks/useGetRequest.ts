import { onMounted, reactive, toRefs } from "vue";

interface IGetRequest {
    url: string
}

export interface IGetResponse<T> {
    fetchedData: T | null,
    isLoading: boolean,
    error: string | null
}

export const useGetRequest = <Data>({
    url,
}: IGetRequest): IGetResponse<Data> => {
    const responseData = reactive({
        fetchedData: null,
        isLoading: false,
        error: null

    } as IGetResponse<Data>)

    onMounted(() => {
        (async () => {
            try {
                responseData.isLoading = true;
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json;charset=UTF-8',
                    }
                })
                responseData.fetchedData = (await response.json());
                responseData.isLoading = false;
            } catch (err) {
                responseData.isLoading = false;
                if (err instanceof Error) {
                    responseData.error = err.message;
                }
            }
        })();
    });

    return ({ ...toRefs(responseData) });
};