import React, { useState } from 'react'
import Childcomponent from Childcomponent

function Parentcomponent() {
    Const [receiveData, setReceiveData]=useState([''])
    const handleDataFromChild=(data)=>{
        setReceiveData(data);
    }

  return (
    <div>
        <h1>Parent Component</h1>
        <p>Data from Child:{receiveData}</p>
        <Childcomponent onDataFromChild={handleDataFromChild}></Childcomponent>
        </div>

  )
}

export default Parentcomponent
