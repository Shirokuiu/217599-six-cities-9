export type FormRatingProps = {
  isDisabled?: boolean;
  isReset?: boolean;
  onRatingChange?: (currentRate: string) => void;
};

export type FormRatingItem = {
  id: string;
  key: number;
  value: string;
  labelTitle: string;
};
