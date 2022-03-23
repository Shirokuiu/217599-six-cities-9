import { api } from 'src/store';
import { LoginPageFormBody } from 'src/types/login-page';
import { UserRoute } from 'src/services/user-service/constants/constants';
import { User } from 'src/types/user';
import { Favorite } from 'src/types/favorite';

class UserService {
  static async checkAuth(): Promise<User> {
    const { data } = await api.get<User>(UserRoute.Login);

    return data;
  }

  static async login(body: LoginPageFormBody): Promise<User> {
    const { data } = await api.post<User>(UserRoute.Login, body);

    return data;
  }

  static async logout(): Promise<undefined> {
    await api.delete(UserRoute.Logout);

    return Promise.resolve(undefined);
  }

  static async getFavorites(): Promise<Favorite[]> {
    const { data } = await api.get(UserRoute.Favorite);

    return data;
  }
}

export default UserService;
