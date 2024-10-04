import { Suspense, lazy } from 'react';
//import { useAuth } from 'hooks/useAuth';
import { Routes, Route } from 'react-router-dom';
//import { Toaster } from 'react-hot-toast';
//import { refreshUser } from '../../redux/auth/authOperations';
import { PublicRoute } from '../../routes/PublicRoute';
import { PrivateRoute }  from '../../routes/PrivateRoute';
import SharedLayout from 'layouts/SharedLayout';
import Loader from 'components/Loader';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';



//const AuthPage = lazy(() => import('pages/AuthPage'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
//const ScreensPage = lazy(() => import('pages/ScreensPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
//const StatsPage = lazy(() => import('pages/StatsPage'));
//const SchedulePage = lazy(() => import('pages/SchedulePage'));
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('../../pages/LogInPage/LoginPage'));
const MainPage = lazy(() => import('../../pages/MainPage/MainPage'));
const ProjectOffice = lazy(() => import('../ProjectOffice/ProjectOffice')); 

const App = () => {
  const theme = useSelector(state => state.auth.user.theme);

  useEffect(() => {
    if (theme) {
      document.body.setAttribute('data-theme', theme);
    }
  }, [theme]);
  

  return (
    <section className='App'>
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
              <PublicRoute  component={<LoginPage />} />
            }
          />
        
            <Route
              path="page"
              element={
                <PrivateRoute component={<MainPage />} />
              }
            />
            <Route
              path="office"
              element={
                <PrivateRoute component={<ProjectOffice />} />
              }
            />

                <Route path="/home" element={<SharedLayout />}>
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      
    </section>
  );
};

export default App;