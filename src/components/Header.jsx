import React from 'react'
import { NuevoPresopuesto } from './NuevoPresopuesto'
import { ControlPresupuesto } from './ControlPresupuesto'

export const Header = ({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
   setIsValidPresupuesto}) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>

        {isValidPresupuesto ? (
          <ControlPresupuesto/>
        ):(
          <NuevoPresopuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
          />
        )}
    </header>
  )
}
