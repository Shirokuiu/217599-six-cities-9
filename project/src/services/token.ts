import { TOKEN_KEY_LOCAL_STORAGE } from 'src/services/constants/constants';
import { TokenItem } from 'src/types/token';

class Token {
  static get(): TokenItem | null {
    return localStorage.getItem(TOKEN_KEY_LOCAL_STORAGE);
  }

  static set(token: TokenItem) {
    localStorage.setItem(TOKEN_KEY_LOCAL_STORAGE, token);
  }

  static remove() {
    localStorage.removeItem(TOKEN_KEY_LOCAL_STORAGE);
  }
}

export default Token;
