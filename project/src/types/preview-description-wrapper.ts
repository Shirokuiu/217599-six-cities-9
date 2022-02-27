import { Offer } from 'src/types/offer';

export type PreviewDescriptionWrapperProps = {
  offer: Offer;
  renderTitle?: () => JSX.Element | undefined;
};
