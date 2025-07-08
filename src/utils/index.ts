import Typograf from 'typograf';

/**
 * Возвращает оттипографированный текст.
 * @param text - строка к которой нужно применить типограф.
 */
export const typograf = (text: string): string => {
  return new Typograf({ locale: ['ru', 'en-US'] }).execute(text);
};

/**
 * Останавливает скролл страницы.
 */

export const scrollLock = (status: boolean) => {
  const htmlNode = document.querySelector('html') as HTMLElement;
  status ? (htmlNode.style.overflow = 'hidden') : (htmlNode.style.overflow = '');
};

/**
 * Форматирует время в читаемый вид.
 * @param runtime - время в минутах.
 * @returns Отформатированная строка времени.
 */

export function formatRuntime(runtime: number): string {
  if (!runtime || isNaN(runtime)) return '';
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  return hours ? `${hours} h ${minutes} min` : `${minutes} min`;
}
