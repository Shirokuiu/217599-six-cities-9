import { Offer } from 'src/types/offer';

export type Image = {
  id: number;
  src: string;
};

export type Good = {
  id: number;
  text: string;
};

export type OfferPageDescriptionNameProps = {
  offer: Offer;
};

export type OfferPageDescriptionRatingProps = {
  rating: number;
};

export type OfferPageDescriptionFeaturesProps = {
  offer: Offer;
};

export type OfferPageDescriptionInsideProps = {
  goods: string[];
};

export type OfferPageDescriptionHostProps = {
  offer: Offer;
};
