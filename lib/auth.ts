import Cookies from 'js-cookie';

export const saveToken = (token: string) => {
  Cookies.set('token', token, { expires: 1 });
};

export const getToken = (): string | undefined => {
  return Cookies.get('token');
};

export const removeToken = () => {
  Cookies.remove('token');
};
