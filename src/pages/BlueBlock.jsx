import React, { useState } from 'react'
import { Input, Wrapper } from '../components/styles'

const BlueBlock = () => {
  const [quantBlocks, setQuantBlocks] = useState(0)
  const [leafBlocks, setLeafBlocks] = useState(0)
  const [numberInit, setNumberInit] = useState(0)
  const [numberFinal, setNumberFinal] = useState(0)

  const [resNumber, setResNumber] = useState(0)

  const calculateBlock = () => {
    const block = (quantBlocks * leafBlocks) / 2
    const numberBlock = parseFloat(block) + parseFloat(numberInit) - 1

    setResNumber(numberBlock)
  }

  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="Quantidade de Blocos"
        onChange={e => setQuantBlocks(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Folhas no Bloco"
        onChange={e => setLeafBlocks(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Número Inicial"
        onChange={e => setNumberInit(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Número Final"
        onChange={e => setNumberFinal(e.target.value)}
      />
      <div className="content-result">
        <h2>
          {numberInit} • {resNumber}
        </h2>
        <h2>
          {resNumber + 1} • {numberFinal}
        </h2>
      </div>

      <button
        className="btn-calc"
        onClick={calculateBlock}
        style={{ width: '100%' }}
      >
        Calcular
      </button>
    </Wrapper>
  )
}

export default BlueBlock
