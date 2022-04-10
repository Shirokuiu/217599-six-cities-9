import { useAppDispatch, useAppSelector } from 'src/hooks';
import { logout } from 'src/store/user-process/api-actions/api-actions';
import UserBlock from 'src/components/shared/user-block/user-block';
import { getAuthorizationStatus, getMe } from 'src/store/user-process/selectors';
import {
  resetNearOffersFavorites,
  unMarkOffer
} from 'src/store/offer-page-process/reducer/offer-page-process';

function OfferPageUserBlock() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const me = useAppSelector(getMe);
  const dispatch = useAppDispatch();

  const handleLogoutClick = async () => {
    try {
      await dispatch(logout());

      dispatch(resetNearOffersFavorites());
      dispatch(unMarkOffer());
    } catch (e) {
      //
    }
  };

  return (
    <UserBlock
      authorizationStatus={authorizationStatus}
      me={me}
      onLogoutClick={handleLogoutClick}
    />
  );
}

export default OfferPageUserBlock;
