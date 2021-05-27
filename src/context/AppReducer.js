export default(state,action) => {                   
    switch(action.type){
        case 'DEL_TRANS' :
            return{
                ...state,                          
                transactions: state.transactions.filter( transaction => transaction.id !== action.payload)      //transactions is the one in the Global Context with same name 
            }
        case 'ADD_TRANS' :
            return{
                ...state,
                transactions: [action.payload, ...state.transactions]               //Here we add transaction to the whole state
            }
        default:
            return state;
    }
}