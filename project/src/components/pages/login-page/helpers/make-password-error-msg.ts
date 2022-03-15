import { ValidationPattern } from 'src/components/pages/login-page/constants/constants';

export const makePasswordErrorMsg = (value: string): string => {
  const messages = new Set<string>([]);

  if (!ValidationPattern.AT_LEAST_ONE_DIGIT.test(value)) {
    messages.add('Введите хотя бы одно число');
  }

  if (!ValidationPattern.AT_LEAST_ONE_ENGLISH_LETTER.test(value)) {
    messages.add('Введите хотя бы одну латинскую букву');
  }

  return [...messages].join('. ');
};
