import { onMounted, onUnmounted, ref, watch } from "vue";

export function useCheckIfMobile() {
    const isMobile = ref<boolean | null>(null);

    const browserResized = () => {
        isMobile.value = checkIfMobile();
    }

    const checkIfMobile = () => {
        return window.innerWidth <= 1000 ? true : false;
    }

    onMounted(() => {
        browserResized()
        window.addEventListener('resize', browserResized);
    })

    onUnmounted(() => {
        window.removeEventListener('resize', browserResized);
    })

    return isMobile;
}