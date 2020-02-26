import React, {useState} from 'react';


const pregunta = (props) => {

    const {setpresupuesto, setpreguntaPresupuesto, setrestante} = props

    const [cantidad, setcantidad] = useState(0)
    const [error, seterror] = useState(false)

    const agregarPresupuesto = (e) => {
        e.preventDefault()

        if(cantidad <= 0 || isNaN ( cantidad)){
            seterror(true)
            return
        }

        setpresupuesto(cantidad)
        setrestante(cantidad)
        setpreguntaPresupuesto(false)
        

    }

    return (
        <React.Fragment>
            <h2>
                Coloca tu presupuesto
            </h2>

            {error && <p className='alert alert-danger error'>El presupuesto es incorrecto</p>}

            <form
             onSubmit={agregarPresupuesto}
            >
                <input type='number' className='u-full-width' placeholder='Agrega tu presupuesto' onChange={e => setcantidad( parseInt(e.target.value, 10) )}/>
                <input type='submit' className='button-primary u-full-width' value='Definir presupuesto'  />
            </form>
        </React.Fragment>
    );
};

export default pregunta;