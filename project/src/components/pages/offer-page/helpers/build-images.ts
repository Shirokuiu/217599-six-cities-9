import { Image } from 'src/types/offer-page';
import { MAX_GALLERY_IMAGES } from 'src/components/pages/offer-page/constants/constants';

export const buildImages = (images: string[] = []): Image[] =>
  images
    .map((image, idx) => ({
      id: idx + 1,
      src: image,
    }))
    .slice(0, MAX_GALLERY_IMAGES);
