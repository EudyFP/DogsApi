import './ImagesMapComponentStyles.css'
export function ImagesMapComponent ({arreglo, stateIndex}){
const mapeo = arreglo.filter((elemento,index) => index == stateIndex).map(elemento =>{
    return(
      <div key={elemento.id} className='container'>
        <img src={elemento.img}/>
        <p>{elemento.description}</p>
      </div>
    );
  })
  return mapeo
}