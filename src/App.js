import React from 'react'
import {shuffle} from 'lodash'
import FlipCard from "react-flip-cards";
import Confetti from 'react-confetti'
import './index.css'
const App = () => {
  const a = shuffle(['1','2','3','4'])
  const b = shuffle(['1','2','3','4','\u{1F4A3}'])
  const d = b.find((b,index) => shuffle(b[index]))
  return(
    <div className="jumbotron">
      <h1 style={{color:'orangered'}}>Bomb <strong style={{color:"red"}}>Or</strong> Num</h1>
      <p style={{color:'orangered', font:'Roboto'}}>rules: 
        <ol style={{color:"blue"}}>
          <li>Flip the card</li>
          <li>Safe if its a number or else lose the game!</li>
          <li>Reload the page for new cards</li>
        </ol>
      </p>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 ml-20">
      <div class="col">
      <FlipCard 
          fontTitle= {a.find((a,index) => shuffle(a[index]))}
          backTitle={d}
          fgColor="blue" 
          bgColor="orangered" 
      >
      {d === '\u{1F4A3}' ? <> <h1>Allah u Akbar!</h1> <h1>You Loose!</h1></>: <> <h1>Your are Safe!</h1> <Confetti width="450px" style={{overflow:"hidden"}}></Confetti> </>}
      </FlipCard>
      </div>
      </div>
    </div>
  )
}
export default App;


