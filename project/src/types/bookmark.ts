export type BookmarkProps = {
  isActive: boolean;
  onToggleActive?: (isActive: boolean) => void;
  className?: string;
  classNameIcon?: string;
  styleMode?: StyleMode;
};

export enum StyleMode {
  Default = 'default',
  Md = 'medium',
}

export type BookmarkIconProps = {
  styleMode: StyleMode;
  classNameIcon: string;
};

export type IconRect = {
  [key: string]: {
    width: number;
    height: number;
  };
};
