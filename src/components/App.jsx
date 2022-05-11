import { Routes,Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import authOperations from "Redux/AuthReducer/AuthOperation";
import { createAsyncPages } from "helpers/AsyncPage";
import PrivateRoute from "./PrivateRoute";
import PublickRoute from "./PublickRoute";

const HomeView = createAsyncPages('HomeView');
const RegisterView = createAsyncPages('RegisterView');
const LoginView = createAsyncPages('LoginView');
const ContactsView = createAsyncPages('ContactsView');
const NotFound = createAsyncPages('NotFound');

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch])
  
  return (
    <>
      <Routes>

        <Route exact path='/' element={<Layout/>} >
          <Route index element={<HomeView />} />
          
          <Route
            path='/register'
            element={
              <PublickRoute redirectTo="/contacts" restricted>
                <RegisterView />
              </PublickRoute>
            }
          />

          <Route
            path='/login'
            element={
              <PublickRoute redirectTo="/contacts" restricted>
                <LoginView />
              </PublickRoute>
              }
          />
        
          <Route path='/contacts'
            element={
              <PrivateRoute redirectTo='/login'>
                <ContactsView />
              </PrivateRoute>
            }
          />

          <Route path='*' element={<NotFound />} />
          
        </Route>
        
      </Routes>
    </>
  );
};
