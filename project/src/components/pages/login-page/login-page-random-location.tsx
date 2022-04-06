import { getRandomCity } from 'src/components/pages/login-page/helpers/get-random-city';
import { Link } from 'react-router-dom';
import { AppRoutingPath } from 'src/types/app';

function LoginPageRandomLocation() {
  const city = getRandomCity();

  return (
    <section className="locations locations--login locations--current">
      <div className="locations__item">
        <Link
          className="locations__item-link"
          to={`${AppRoutingPath.Index}?country=${city}&sort=Popular`}
        >
          <span>{city}</span>
        </Link>
      </div>
    </section>
  );
}

export default LoginPageRandomLocation;
