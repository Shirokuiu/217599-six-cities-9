import { ValidationPattern } from 'src/components/pages/login-page/constants/constants';

export const makeMailErrorMsg = (value: string): string => {
  const messages = new Set<string>([]);

  if (!ValidationPattern.EMAIL.test(value)) {
    messages.add('Введите корректный email');
  }

  return [...messages].join('. ');
};
