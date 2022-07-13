import React from 'react'
import { Wrapper, Input, Button } from './styles'
import { Link } from 'react-router-dom'

const Buttons = () => {
  return (
    <Wrapper>
      <button className="btn-calc" style={{ width: '100%' }}>
        Calcular
      </button>
      <div className="container-btn">
        <Button style={{ backgroundColor: '#FF6968' }}>Bloco Azul</Button>
        <Button style={{ backgroundColor: '#FF8560' }}>Bloco 6 em 1</Button>
        <Button style={{ backgroundColor: '#5863F9' }}>Corte F1</Button>
        <Button style={{ backgroundColor: '#99DB45' }}>Corte A4</Button>
      </div>
    </Wrapper>
  )
}

export default Buttons
