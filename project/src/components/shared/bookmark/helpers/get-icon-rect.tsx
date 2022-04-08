import { IconRect, StyleMode } from 'src/types/bookmark';

const rect: IconRect = {
  [StyleMode.Default]: {
    width: 18,
    height: 19,
  },
  [StyleMode.Md]: {
    width: 31,
    height: 33,
  },
};

// eslint-disable-next-line
export const getIconRect = (styleMode: StyleMode) => {
  return rect[styleMode];
};
