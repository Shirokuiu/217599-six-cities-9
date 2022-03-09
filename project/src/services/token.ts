import { TOKEN_KEY_LOCAL_STORAGE } from 'src/services/constants/constants';

class Token {
  static get(): Token | undefined {
    return localStorage.getItem(TOKEN_KEY_LOCAL_STORAGE) as Token;
  }
}

export default Token;
