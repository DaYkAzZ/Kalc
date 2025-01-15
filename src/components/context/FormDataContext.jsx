import React, { createContext, useState } from 'react';

// Création du contexte
export const FormContext = createContext();

// Fournisseur de contexte
export const FormProvider = ({ children }) => {
    const [form, setForm] = useState([]);

    return (
        <FormContext.Provider value={{ form, setForm }}>
            {children}
        </FormContext.Provider>
    );
};
