import React from 'react';
import Gasto from './gasto'

const listado = ({gastos, eliminargasto}) => {
    console.log('gastos', gastos)
    return (
        <div className='gastos-realizados'>
            <h2>Listado</h2>
            {gastos.map(gasto => {
              return  <Gasto 
                key={gasto.id}
                gasto={gasto}
                eliminargasto={eliminargasto}
                />
            })}
        </div>
    );
};

export default listado;