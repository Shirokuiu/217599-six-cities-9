import { LogoLinkProps } from 'src/types/logo-link';
import { switchLink } from 'src/components/shared/logo-link/helpers/switch-link';

function LogoLink({ isActive = false }: LogoLinkProps) {
  return switchLink(
    isActive,
    <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />,
  );
}

export default LogoLink;
