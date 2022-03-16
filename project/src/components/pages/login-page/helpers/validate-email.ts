import { ValidationPattern } from 'src/components/pages/login-page/constants/constants';

export const validateEmail = (value: string): boolean => !ValidationPattern.EMAIL.test(value);
