export function preloadImage(imageUrls: string[]) {
  const promises = imageUrls.map(
    (url) =>
      new Promise<void>((resolve, reject) => {
        const img = document.createElement("img");
        img.src = url;
        img.onload = () => resolve();
        img.onerror = () => reject(new Error(`Failed to load ${url}`));
      })
  );

  return Promise.all(promises);
}

export function addLoadClass(
  container: HTMLElement | null,
  className: string = "onload-img"
) {
  if (container) {
    container.classList.add(className);
  }
}
