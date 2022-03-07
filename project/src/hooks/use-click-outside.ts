import { ChangeEvent, RefObject, useEffect } from 'react';

export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  onOutsideClick: () => void = () => undefined,
) => {
  useEffect(() => {
    document.addEventListener(
      'mousedown',
      handleClickOutside as unknown as (e: Event) => void,
    );

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside as unknown as (e: Event) => void,
      );
    };
  }, [ref]);

  const handleClickOutside = (evt: ChangeEvent) => {
    if (ref.current && !ref.current.contains(evt.target)) {
      onOutsideClick();
    }
  };
};
