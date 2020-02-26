import React, {useState, Fragment} from 'react';
import Error from './error'
import shortid from 'shortid'

const formulario = (props) => {

    const {setgasto, setpalancagasto} = props

    const [nombreGasto, setnombreGasto] = useState('')
    const [cantidadGasto, setcantidadGasto] = useState('')
    const [error, seterror] = useState(false)


    const agregarGasto = e => {
        e.preventDefault()

        //validar

        if(cantidadGasto <= 0 || isNaN ( cantidadGasto || nombreGasto === '' )){
            seterror(true)
            return
        }

        //pasar al componente principal

        const gasto = {
            nombreGasto,
            cantidadGasto,
            id: shortid.generate()
        }

        
        setgasto(gasto)
        setpalancagasto(true)
        seterror(false)

        setnombreGasto('')
        setcantidadGasto('')

    }

    return (
        <Fragment>
          
        {error && <Error mensaje='Por favor llena los campos correctamente'/>}

            <form
             
            onSubmit={agregarGasto}
            >

            
                 
                <h2>
                    Agrega tus gastos aqui
                </h2>

                <div className='campo'>
                    <label>Nombre gasto</label>
                    <input 
                        type='text'
                        className='u-full-width '
                        placeholder='Ej. Transporte'
                        onChange={(e => setnombreGasto(e.target.value) )}
                        value={nombreGasto}
                    />
                </div>

                <div className='campo'>
                    <label>Cantidad Gasto</label>
                    <input 
                        type='number'
                        className='u-full-width '
                        placeholder='Ej. Transporte'
                        onChange={(e => setcantidadGasto(parseInt(e.target.value, 10)) )}
                        value={cantidadGasto}
                    />
                </div>

                <input
                 type='submit'
                 className='button-primary u-full-width'
                 value='Agregar Gasto'
                />

            </form>
            </Fragment>
    );
};

export default formulario;