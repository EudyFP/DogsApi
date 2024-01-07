import { useEffect, useState } from 'react'
import { ImagesMapComponent } from './components/ImagesMap/ImagesMapComponent'
import { dogData } from './services/fetchDogData'
import './App.css'

function App() {
const [useIndex, setIndex] = useState(0)
const [useList, setList] = useState([])

useEffect(()=>{
console.log("useEffect ejecutado");
(async ()=>{
  try{
  const res = await dogData()
  setList([...res])
  } catch (e){
    console.log(e.message);
  }
  })();
},[])

console.log("hola")
const IndexOfTheLastElementOfArray = useList.length - 1
function atras(){
if(useIndex === 0){
  setIndex(IndexOfTheLastElementOfArray)
} else {
  setIndex(useIndex - 1)
}
}
console.log("hola")
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
