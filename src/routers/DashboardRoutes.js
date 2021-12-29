import {
    Routes, Route,
    Navigate
} from 'react-router-dom';
import { Employees } from '../components/Employees';

export const DashboardRoutes = () => {
    return ( 
        <>
            <div>
                <Routes>
                    <Route path="/" element={<Employees />} />
                    <Route path='*' element={<Navigate to="/" />} />
                </Routes>
            </div>

        </>
    )
}