import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { action } from '../state/constant'



const Bank = () => {
  const dispatch = useDispatch()
  const { depositMoney, withdrawMoney }=bindActionCreators(action,dispatch)

  const [Amount, setAmount] = useState(0)
  const amount=useSelector(state=>state.amount)
  


  const handleChange=(e)=>{
    setAmount(e.target.value)
  }

  const handleDeposit=()=>{
    dispatch(depositMoney(+Amount))
  }
  const handleWithdraw=()=>{
    dispatch(withdrawMoney(+Amount))
  }
  return (
    <div className='container'>


      <h2>Deposit/Withdraw Money</h2>
      <button className='btn btn-primary mx-3'onClick={handleWithdraw}>Widrawal</button>
      <input type="text" name="amount" placeholder='Enter Your Amount' value={Amount} onChange={handleChange} />

      <button className='btn btn-primary mx-3'onClick={handleDeposit}>Deposit</button>

      <form >
              <input disabled={true} placeholder={amount} aria-label="Search" />
              <button  disabled={true} type="submit">Balance</button>
            </form>
    </div>
  )
}

export default Bank