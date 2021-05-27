import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'


export const AddTransaction = () => {
const [text , setText] = useState('');
const [amount , setAmount] = useState(0 );

const { addTrans } = useContext(GlobalContext);    

const onSub = e => {
    e.preventDefault();

    const newTrans = {
      id: Math.floor(Math.random()*100000000),
      text,
      amount: +amount           
    }
    
    addTrans(newTrans);

}

    return (
      <>
      <h3>ADD A NEW INCOME / EXPENSE</h3>
      <form onSubmit={onSub}>
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter description..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (Negative - Expense | Positive - Income)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add a new income / expense </button>
      </form>
      </>
    )
}
