import { useState } from 'react';
import React, { Component } from 'react'
export class Index extends Component{
    constructor(){
        super();
        this.state={
            items:0,
        }
        console.log("constructor called!!");
    }
  componentDidMount(){
    console.log("component did mount called")
  }
  componentDidUpdate(){
    console.log("component updated")
  }
  
  componentWillUnmount(){
    alert("component is going to be unmounted")
  }
}
function Index() {
    console.log("Render called!!")
    handleButtonClick=()=>{
        this.setState({items:this.state.items+1})
    }
  return (
    <>
    
    <div>Index</div>
    <p>Items:{this.state.items}</p>
    <button onClick={this.handleButtonClick}>ClickMe</button>
    </>
    
  )
}

export default Index