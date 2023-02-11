import { FONT_SIZE } from "./variables";

export function toRem(pixels: number) {
  const remValue = pixels / FONT_SIZE.BASE;
  return `${remValue}rem`;
}
