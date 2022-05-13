import { Routes,Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import { Suspense, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import authOperations from "Redux/AuthReducer/AuthOperation";
import { createAsyncPages } from "helpers/AsyncPage";
import PrivateRoute from "./PrivateRoute";
import PublickRoute from "./PublickRoute";
import authSelector from "Redux/AuthReducer/Selector";
import Spinner from 'react-bootstrap/Spinner'

const HomeView = createAsyncPages('HomeView');
const RegisterView = createAsyncPages('RegisterView');
const LoginView = createAsyncPages('LoginView');
const ContactsView = createAsyncPages('ContactsView');
const NotFound = createAsyncPages('NotFound');


export const App = () => {
  const dispatch = useDispatch();
  const isRefreshUser=useSelector(authSelector.getIsRefresh)
  
  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch])
  
  return (
    
    !isRefreshUser && (
      <Suspense fallback={<Spinner animation="border" variant="primary" size="xl" />}>
        <Routes>

          <Route exact path='/' element={<Layout />} >
          
            <Route
              index
              element={
                <PublickRoute redirectTo="/contacts" restricted>
                  <HomeView />
                </PublickRoute>
                }
            />
          
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
      </Suspense>
    )
  );
};
