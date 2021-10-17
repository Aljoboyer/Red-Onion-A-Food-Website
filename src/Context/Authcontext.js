import React, { createContext } from 'react';
import useFirebase from '../FirebaseAuth/useFirebase';

export const Contextauth = createContext();
const Authcontext = ({children}) => {
    const Allcontext = useFirebase();
    return (
        <Contextauth.Provider value={Allcontext} >
            {children}
        </Contextauth.Provider>
    );
};

export default Authcontext;