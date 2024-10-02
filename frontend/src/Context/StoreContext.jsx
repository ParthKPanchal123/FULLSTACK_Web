import React, { createContext } from 'react';
import { food_list } from '../Assets/assets';


export const StoreContext = createContext(null);

const StoreProvider = (props) => {
    const contextValue = {
        food_list
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;
