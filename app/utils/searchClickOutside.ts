export const useSearchClickOutside = (
  callback: () => void,
  selector: string = ".header__search"
) => {
  const handleClickOutside = (event: MouseEvent) => {
    const element = document.querySelector(selector);
    if (element && !element.contains(event.target as Node)) {
      callback();
    }
  };

  onMounted(() => {
    document.addEventListener("click", handleClickOutside);
  });

  onBeforeUnmount(() => {
    document.removeEventListener("click", handleClickOutside);
  });
};