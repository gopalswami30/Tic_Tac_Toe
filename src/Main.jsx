import React, { useState } from 'react'
const Main=()=>{
   
    const [arr,setArr]=useState([['','',''],
        ['','',''],
        ['','',''],
    ]);
    const [turn,setTurn]=useState(false);
    const [count,setCount]=useState(0)
    const [win,setWin]=useState('')
    const eventItem=(event)=>{
      const [row,col]=[event.target.attributes.row.value,event.target.attributes.col.value]
     setArr((prev)=>{
        if(!turn){
           
            
         return [...prev,arr[row][col]='o'];
     }
     else
     {  
      return [...prev,arr[row][col]='x']}
    })
    setCount(count+1)
    setTurn(!turn)
   
        checkWinner();
    
    }
    const checkWinner=()=>{
        console.log(count);
        console.log(arr);
        for(var i=0;i<2;i++){
            //row check
            console.log('i am winner')
        if(arr[i][0]!==""&&arr[i][0]===arr[i][1]&&arr[i][1]===arr[i][2]){
            setWin(`Player ${arr[i][0]} winner`)
            // return;
        }
       else if(arr[0][i]!==""&&arr[0][i]===arr[1][i]&&arr[1][i]===arr[2][i]){
            setWin(`Player ${arr[0][i]} winner`)
        //  return;
        }
    }
    if(arr[0][0]!==""&&arr[1][1]===arr[0][0]&&arr[1][1]===arr[2][2]){
        setWin(`Player ${arr[0][0]} winner`)
        // return;
    }
    if(arr[0][2]!==""&&arr[0][2]===arr[1][1]&&arr[1][1]===arr[2][0]){
        setWin(`Player ${arr[0][2]} winner`)
        // return;
    }
}
    return (<>
    <header className='head'>Tic Tac Toe</header>
    <section className='mainSection'>
    <div className='mainDiv'>
    <div className='row1'><div className='div1'  row='0' col='0' onClick={eventItem}>{arr[0][0]}</div><div className='divc' row='0' col='1' onClick={eventItem}>{arr[0][1]}</div><div row='0' col='2' className='divc' onClick={eventItem}>{arr[0][2]}</div></div>
    <div className='row'><div className='div1' row='1' col='0' onClick={eventItem}>{arr[1][0]}</div><div className='divc' row='1' col='1' onClick={eventItem}>{arr[1][1]}</div><div row='1' col='2' onClick={eventItem} className='divc'>{arr[1][2]}</div></div>
    <div className='row'><div className='div1' row='2' col='0' onClick={eventItem}>{arr[2][0]}</div><div className='divc' row='2' col='1' onClick={eventItem}>{arr[2][1]}</div><div className='divc' row='2' col='2' onClick={eventItem}>{arr[2][2]}</div></div>
     {/* <div className='lineDiv'></div>
     <div className='lineDiv2'></div> */}
    </div>
    <h1 className='heading'>{win!==''?win:'Player x turn'}</h1>
    </section>
    </>)
}
export default Main