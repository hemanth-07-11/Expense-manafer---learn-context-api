import React, { createContext, useReducer} from 'react'
import AppReducer from './AppReducer'
 
const initialState = {
    transactions: [
    {id: 1, text:"Income 1", amount: 2000},
    {id: 2, text:"Food", amount: -500},
    {id: 3, text:"Salary 1", amount: 5000},
    {id: 4, text:"Travel",amount: -200}
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {

                

  
function deleteTrans(id) {
    dispatch({
        type: "DEL_TRANS",
        payload: id
    });
}

    

function addTrans(transaction) {
    dispatch({
        type: "ADD_TRANS",
        payload: transaction
    });
}
    
const [state,dispatch] = useReducer(AppReducer, initialState);

return ( <GlobalContext.Provider value={{        
    transaction: state.transactions, 
    deleteTrans   ,
    addTrans                                  
}}>
    {children}
</GlobalContext.Provider>
)

}