import { AuthorizationStatus } from 'src/types/auth';
import { User } from 'src/types/user';

export type UserBlockProps = {
  authorizationStatus: AuthorizationStatus;
  me?: User;
  onLogoutClick?: () => void;
  onFavoriteNavigate?: () => void;
};
