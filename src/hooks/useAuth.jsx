import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext/AuthContext';

const useAuth = () => {
const authInformation = useContext(AuthContext)
return authInformation
};

export default useAuth;