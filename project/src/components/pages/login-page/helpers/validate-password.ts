import { ValidationPattern } from 'src/components/pages/login-page/constants/constants';

export const validatePassword = (value: string): boolean => ValidationPattern.PASSWORD.test(value);
