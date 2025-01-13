import React, { createContext, useState } from 'react';

// Création du contexte
export const WorkersContext = createContext();

// Fournisseur de contexte
export const WorkersProvider = ({ children }) => {
    const [workers, setWorkers] = useState([]);

    return (
        <WorkersContext.Provider value={{ workers, setWorkers }}>
            {children}
        </WorkersContext.Provider>
    );
};
