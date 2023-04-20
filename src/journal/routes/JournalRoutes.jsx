import { Routes, Route, Navigate } from 'react-router-dom';
import { HomeView } from '../view/HomeView';

export const JournalRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={ <HomeView /> }/>

            <Route path='/*' element={ <Navigate to='/' /> } />
        </Routes>
    )
}