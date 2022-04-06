import LogoLink from 'src/components/shared/logo-link/logo-link';
import LoginPageForm from 'src/components/pages/login-page/login-page-form/login-page-form';
import LoginPageRandomLocation from 'src/components/pages/login-page/login-page-random-location';

function LoginPage() {
  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <LogoLink />
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title" data-testid="title">
              Sign in
            </h1>
            <LoginPageForm />
          </section>
          <LoginPageRandomLocation />
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
