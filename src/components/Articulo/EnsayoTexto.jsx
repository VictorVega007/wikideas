

export const List = () => {
  let texto = "El Parque Nacional de los Glaciares (en inglés Glacier National Park) se encuentra situado en Montana, Estados Unidos, haciendo frontera con las provincias canadienses de Alberta y Columbia Británica, entre las coordenadas 48° 14' - 49° 0' Norte y 114°28' - 113°14' Oeste. Este se compone de dos sistemas montañosos, 130 lagos con nombre, más de mil especies de plantas y cientos de especies de animales. Este vasto ecosistema de 4101 kilómetros cuadrados es la pieza central de lo que ha venido llamándose la “corona de ecosistemas del continente”, un conjunto de áreas protegidas de 44 mil kilómetros cuadrados.​ La famosa autopista Going-to-the-Sun, atraviesa el corazón del parque sorteando la Divisoria continental norteamericana. Desde la autopista los visitantes obtienen buenas vistas de las cadenas montañosas Lewis y Livingston así como de densos bosques, cascadas, dos grandes lagos y de zonas de tundra alpina. Junto con la autopista, cinco hoteles históricos y chalets están incluidos en el catálogo de puntos de referencia históricos. Un total de 350 puntos se encuentran incluidos en el registro nacional de lugares históricos. El parque nacional de los Glaciares hace frontera con el parque nacional Waterton Lakes en Canadá. Ambos parques también son conocidos por el nombre Parque Pacífico Waterton-Glacier, el primer parque pacífico internacional que se instauró en el mundo, en 1932. Las Naciones Unidas establecieron una reserva de la biosfera en 1976 y en 1995 fueron nombrados Patrimonio de la Humanidad por la Unesco.​"
 
  let arr = [];
  const pintar = () =>{
    let longitud = texto.split('.').length; 
    let union = "";
    for(let i=0; i< longitud; i++){
        if(i%3==2){
            arr.push(union);
            union="";
        }else {
            union += texto.split('.')[i];
        }    
    }
  }
  pintar();
  return (
    <div>
      {arr?.map(e=>(
        <p>{e}.</p>
      ))}
    </div>
  )
}
