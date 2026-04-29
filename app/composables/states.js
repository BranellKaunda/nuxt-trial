export const useCounter = () => useState("counter", () => Math.random() * 100);
export const names = ref(["john", "sam", "mary"]);
export const teams = ref();
