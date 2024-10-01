import { Suspense, lazy } from 'react';
//import { useDispatch } from 'react-redux';
//import { useAuth } from 'hooks/useAuth';
import { Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
//import { Toaster } from 'react-hot-toast';
//import { refreshUser } from '../../redux/auth/authOperations';
//import { PrivateRoute} from '../../routes/PrivateRoute';
import { PublicRoute } from '../../routes/PublicRoute';
=======
import { Toaster } from 'react-hot-toast';
import { refreshUser } from '../../redux/auth/authOperations';
import { PrivateRoute, PublicRoute } from 'routes';
>>>>>>> 8c8da78dbc4389aefe80c6dabd66558ebd12f0d1
import SharedLayout from 'layouts/SharedLayout';
import Loader from 'components/Loader';

<<<<<<< HEAD
//const WelcomePage = lazy(() => import('../../pages/WelcomePage'));
//const AuthPage = lazy(() => import('../../pages/AuthPage'));
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const ScreensPage = lazy(() => import('../../pages/ScreenPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));
//const StatsPage = lazy(() => import('../../pages/StatsPage'));
const SchedulePage = lazy(() => import('../../pages/SchedulePage'));
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('../../pages/LogInPage/LoginPage'));
const MainPage = lazy(() => import('../../pages/MainPage/MainPage'));
=======
const WelcomePage = lazy(() => import('pages/WelcomePage'));
const AuthPage = lazy(() => import('pages/AuthPage'));
const HomePage = lazy(() => import('pages/HomePage'));
const ScreensPage = lazy(() => import('pages/ScreensPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const StatsPage = lazy(() => import('pages/StatsPage'));
const SchedulePage = lazy(() => import('pages/SchedulePage'));
>>>>>>> 8c8da78dbc4389aefe80c6dabd66558ebd12f0d1

const App = () => {

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
<<<<<<< HEAD
         <Route
            path="/"
=======
          <Route
            path="/"
            element={
              <PublicRoute component={<WelcomePage />} redirectTo="/home" />
            }
          />
          <Route
            path="/auth/:id"
>>>>>>> 8c8da78dbc4389aefe80c6dabd66558ebd12f0d1
            element={
              <PublicRoute component={<HomePage />} />
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute component={<RegistrationPage/>} />
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute component={<LoginPage />} />
            }
          />
          <Route
            path="page"
            element={
              <PublicRoute component={<MainPage />} />
            }
          />

          
           
            <Route
              path="board/:boardId"
              element={
                <PublicRoute
                  component={<ScreensPage />}
                  redirectTo={'/auth/login'}
                />
              }
            />
<<<<<<< HEAD
            
=======
            <Route
              path="stats"
              element={
                <PrivateRoute
                  component={<StatsPage />}
                  redirectTo={'/auth/login'}
                />
              }
            />
>>>>>>> 8c8da78dbc4389aefe80c6dabd66558ebd12f0d1
            <Route
              path="schedule"
              element={
                <PublicRoute
                  component={<SchedulePage />}
                  redirectTo={'/auth/login'}
                />
              }
            />
                <Route path="/home" element={<SharedLayout />}>
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;