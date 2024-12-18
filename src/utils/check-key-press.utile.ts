import { KeyboardEvent } from "react";

export const fnCheckNumberKeyCode = (e: KeyboardEvent<HTMLInputElement>) => {
  const { key, shiftKey } = e;
  if (shiftKey) {
    e.preventDefault();
    return;
  }
  if (
    [
      "Backspace",
      "Tab",
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ].includes(key)
  ) {
    return;
  }
  if (/\d/g.test(key)) {
    return;
  }

  e.preventDefault();
};

export const fnCheckIgnoreThaiKeyCode = (
  e: KeyboardEvent<HTMLInputElement>
) => {
  const { key } = e;
  const regex = /([\u0E00-\u0E7F]+)/gm;

  if (!regex.test(key)) {
    return;
  }
  e.preventDefault();
};
