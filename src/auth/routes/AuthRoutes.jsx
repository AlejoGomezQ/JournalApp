import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginView, RegisterView } from '../views';

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path='/login' element={ <LoginView /> }/>
            <Route path='/register' element={ <RegisterView /> }/>

            <Route path='/*' element={ <Navigate to='/auth/login' /> }/>
        </Routes>
    )
}