import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated);

    const { data } = useSelector((state) => state?.auth);

   const checkAuth = () => {
    if(!isAuthenticated || data === undefined) {
        toast.error("Please Login to continue!");
        return navigate('/login');
    }
   }

    useEffect(() => {
        checkAuth();
    }, [isAuthenticated])
    
    return children;
};

export default ProtectedRoute;