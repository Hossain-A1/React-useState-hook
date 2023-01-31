import { useState } from "react";

const Plyer = () => { 
    const [customer,setCustomer] = useState([]);

    const customerHandler = () =>{
      const id = customer.length;
      const number = Math.floor(Math.random() * 100 +1)

      setCustomer([...customer,{id: id, number:number}] )
    }


  return (
    <div>
      <button onClick={customerHandler}>Add coustomer</button>
      {
        customer.length > 0 && customer.map(singleCustomer => <h2 key={singleCustomer.id}>{singleCustomer.number}</h2>)
      }
    </div>
  )
}

export default Plyer
