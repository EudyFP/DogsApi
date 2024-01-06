import { useState } from 'react'

import './App.css'
import { ImagesMapComponent } from './components/ImagesMap/ImagesMapComponent'

function App() {
const [useIndex, setIndex] = useState(0)
const arr = [
  {img: "https://scontent.fhex4-1.fna.fbcdn.net/v/t1.6435-9/157286752_5321185521232744_1499124487789471922_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0bb214&_nc_ohc=_9m6d2CnPx0AX-kwxJ4&_nc_ht=scontent.fhex4-1.fna&oh=00_AfDwdTzvklKHbTZobWNM-RVQ07yXBpwLfw4lrb5czWiqmA&oe=65B4ED05", description: "foto de conker estando tomado",
  id: crypto.randomUUID()},
  {img: "https://i.chzbgr.com/original/8756940288/h5181F389/bubsy-conker-fan-art",
  description: "conker con bubsy",
  id: crypto.randomUUID()}
]
const IndexOfTheLastElementOfArray = arr.length - 1
function atras(){
if(useIndex === 0){
  setIndex(IndexOfTheLastElementOfArray)
} else {
  setIndex(useIndex - 1)
}
}

function siguiente(){
if(useIndex === IndexOfTheLastElementOfArray){
  setIndex(0)
} else {
  setIndex(useIndex + 1)
}
}

  return (
    <>
    <ImagesMapComponent arreglo={arr} stateIndex={useIndex}/>
    <button onClick={atras}>atras</button>
    <button onClick={siguiente}>siguiente</button>
    </>
  )
}

export default App
