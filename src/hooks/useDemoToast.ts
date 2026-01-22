import { useToast } from "@company/commons/store";

export const useDemoToast = () => {
  const toast = useToast();

  const showDemoToast = () =>
    toast.info("Commons 토스트 버스가 정상 동작 중입니다. ✅", {
      autoClose: 2000,
    });

  return {
    ...toast,
    showDemoToast,
  };
};
