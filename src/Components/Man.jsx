import { useState } from "react";

const demoPlayerObj = {
  firstName: 'Hossain',
  lastName: 'Ahmed',
  jerseyNum: 10,

}
const Man = () => {
  const [player, setPlayer] = useState({})

const ModifyPlayer = () =>{
  setPlayer({...player, ...demoPlayerObj})
}
const goldHandler =()=>{
  const randomGols = Math.floor(Math.random() * 10 +1)
  setPlayer({...player,gols: randomGols})
}

  return (
    <div>
      <h2>Player name: {player.firstName}{player.lastName}</h2>
      <h2>Player JerseyNum:{player.jerseyNum}</h2>
      <h2>Gols: {player.gols}</h2>
      <button onClick={ModifyPlayer}>modify player</button>
      <button onClick={goldHandler}>gols</button>
    </div>
  )
}

export default Man