import React from 'react'
import { Wrapper, Input, Button } from './styles'

const Home = () => {
  return (
    <Wrapper>
      <div>
        <Input type="text" placeholder="Quantidade de blocos" />
        <Input type="text" placeholder="Quantidades de Folhas blocos" />
        <Input type="text" placeholder="Número Inicial" />
        <Input type="text" placeholder="Número Final" />
      </div>
      <textarea name="text" rows="4" />
    </Wrapper>
  )
}

export default Home
