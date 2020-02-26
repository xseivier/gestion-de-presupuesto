import React, {useState, useEffect} from 'react';
import Pregunta from './components/pregunta'
import Formulario from './components/formulario';
import Listado from './components/listado'
import Controlpresupuesto from './components/controlpresupuesto';


const App = () => {

  const [presupuesto, setpresupuesto] = useState(0)
  const [preguntaPresupuesto, setpreguntaPresupuesto] = useState(true)
  const [gasto, setgasto] = useState({})
  const [gastos, setgastos] = useState([])
  const [palancagasto, setpalancagasto] = useState(false)
  const [restante, setrestante] = useState(0)


  useEffect(() => {

    if(palancagasto){
      const listadoGastos = [...gastos, gasto]
    setgastos(listadoGastos)

    const presupuestoRestante = restante - gasto.cantidadGasto

      setrestante(presupuestoRestante)

    setpalancagasto(false)

    }

    

  },[gasto])

  const eliminargasto = (id, cantidadGasto) =>{

   console.log('cantidadGasto', cantidadGasto)
   const newrest = restante + cantidadGasto
    
   setrestante(newrest)

    const listadoGastos = gastos.filter(gasto => {
      return gasto.id !== id  
    })

   

    setgastos(listadoGastos)
  }

  return (
    <div className='App container'>
      <header>
        <h1>
          Gasto semanal
        </h1>

        <div className='contenido-principal contenido'>
       
        { preguntaPresupuesto
        
          ? 
          <Pregunta 
          setpresupuesto={setpresupuesto}
          setpreguntaPresupuesto={setpreguntaPresupuesto}
          setrestante={setrestante}
          />

          :

          <div className='row'>
            <div className="one-half column">
              <Formulario
               setgasto={setgasto}
               setpalancagasto={setpalancagasto}
              />
            </div>

            <div className="one-half column">
              <Listado
               gastos={gastos}
               eliminargasto={eliminargasto}
              
              />

              <Controlpresupuesto
               presupuesto={presupuesto}
               restante={restante}
              />
            </div>
          </div>
        }
        </div>

       
      </header> 
    </div>
  );
};

export default App;