import { Suspense, lazy } from 'react';
//import { useDispatch } from 'react-redux';
//import { useAuth } from 'hooks/useAuth';
import { Routes, Route } from 'react-router-dom';
//import { Toaster } from 'react-hot-toast';
//import { refreshUser } from '../../redux/auth/authOperations';
//import { PrivateRoute} from '../../routes/PrivateRoute';
import { PublicRoute } from '../../routes/PublicRoute';
import SharedLayout from 'layouts/SharedLayout';
import Loader from '../Loader/Loader';

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

const App = () => {

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
         <Route
            path="/"
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