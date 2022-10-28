import { useCallback } from 'react';
import './App.css';
import Calculadora from './Calculadora';

function App() {
  const calculaRaizQuadrada = Math.sqrt;

  const calculaHipotenusa = useCallback((ladoB, ladoC) => {
    const quadradoA = Math.pow(ladoB, 2);
    const quadradoB = Math.pow(ladoC, 2);
    return calculaRaizQuadrada(quadradoA, quadradoB)
  }, [calculaRaizQuadrada]);

  return (
    <div className="App">
      <img
        style={{
          maxWidth: "500px"
        }}
        src="/images/triangulo_retangulo.png"
        alt="Triangulo Retangulo"
      />
      <Calculadora calcularHipotenusa={calculaHipotenusa} />
    </div>
  );
}

export default App;
