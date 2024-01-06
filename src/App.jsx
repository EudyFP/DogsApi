import { useEffect, useState } from 'react'

import './App.css'
import { ImagesMapComponent } from './components/ImagesMap/ImagesMapComponent'

function App() {
const [useIndex, setIndex] = useState(0)
const [useList, setList] = useState([])
useEffect(()=>{
fetch("https://apimocha.com/dogsapi/dogs")
.then((res=>res.json()
.then(data=> setList([...data]))))
},[])
const IndexOfTheLastElementOfArray = useList.length - 1
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
    <ImagesMapComponent arreglo={useList} stateIndex={useIndex}/>
    <button onClick={atras}>atras</button>
    <button onClick={siguiente}>siguiente</button>
    </>
  )
}

export default App
