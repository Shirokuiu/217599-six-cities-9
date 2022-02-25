export type FormRatingProps = {
  onRatingChange?: (currentRate: string) => void;
};

export type FormRatingItem = {
  id: string;
  value: string;
  labelTitle: string;
};
