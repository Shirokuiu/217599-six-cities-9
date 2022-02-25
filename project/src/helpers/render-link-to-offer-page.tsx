import { Link } from 'react-router-dom';
import { AppRoutingPath } from 'src/types/app';

export const renderLinkToOfferPage = (
  title: string,
  offerId: number,
): JSX.Element => (
  <Link to={`${AppRoutingPath.OfferPage}/${offerId}`}>{title}</Link>
);
