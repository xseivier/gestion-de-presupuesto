import React from 'react';

const gasto = ({gasto, eliminargasto}) => {

    
    console.log('gasto.cantidadGasto', gasto.cantidadGasto)
    return (
       <li className='gastos'>
           <p>
               {gasto.nombreGasto}
             <span className='gasto' >${gasto.cantidadGasto}</span> 

             <button onClick={() => eliminargasto(gasto.id, gasto.cantidadGasto)}>
                Eliminar
             </button>
           </p>
       </li>
    );
};

export default gasto;