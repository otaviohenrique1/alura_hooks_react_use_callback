import React, { useEffect, useState } from 'react'

export default function Calculadora({ calcularHipotenusa }) {
  const [ladoB, setLadoB] = useState(0);
  const [ladoC, setLadoC] = useState(0);
  const [hipotenusa, setHipotenusa] = useState(0);

  useEffect(() => {
    if (ladoB > 0 && ladoC > 0) {
      setHipotenusa(calcularHipotenusa(ladoB, ladoC));
    }
  }, [calcularHipotenusa, ladoB, ladoC]);
  

  return (
    <div>
      <div>
        <label
          htmlFor="lado_b"
        >Lado B</label>
        <input
          type="number"
          name="lado_b"
          id="lado_b"
          placeholder="Insira o valor de A"
          value={ladoB}
          onChange={(event) => setLadoB(event.target.value)}
        />
      </div>
      <div>
        <label
          htmlFor="lado_c"
        >Lado C</label>
        <input
          type="number"
          name="lado_c"
          id="lado_c"
          placeholder="Insira o valor de B"
          value={ladoC}
          onChange={(event) => setLadoC(event.target.value)}
        />
      </div>
      <p>O valor da hipotenusa é: <strong>{hipotenusa}</strong></p>
    </div>
  )
}
