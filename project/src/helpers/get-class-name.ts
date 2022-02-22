export const getClassName = ({
  classNames,
  defaultClass,
}: {
  classNames?: string[];
  defaultClass?: string;
}): string => {
  if (classNames) {
    return [...classNames, defaultClass]
      .filter((className) => className)
      .join(' ');
  }

  return defaultClass ?? '';
};
