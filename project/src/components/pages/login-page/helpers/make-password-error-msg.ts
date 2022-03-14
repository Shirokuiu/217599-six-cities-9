import { ValidationPattern } from 'src/components/pages/login-page/constants/constants';

export const makePasswordErrorMsg = (value: string): string => {
  let messages: string[] = [];

  if (!ValidationPattern.AT_LEAST_ONE_DIGIT.test(value)) {
    messages.push('Введите хотя бы одно число');

    // NOTE Очищаю дубликаты
    messages = [...new Set(messages)];
  }

  if (!ValidationPattern.AT_LEAST_ONE_ENGLISH_LETTER.test(value)) {
    messages.push('Введите хотя бы одну латинскую букву');

    // NOTE Очищаю дубликаты
    messages = [...new Set(messages)];
  }

  return messages.join('. ');
};
