import './App.css';
import { useRef , useState } from 'react'

function App() {
  const entrada1 = useRef()
  const entrada2 = useRef()
  const [numero, setNumero] = useState(null)

  function clicaSomar() {
     mensagem(parseFloat(entrada1.current.value)+parseFloat(entrada2.current.value))
    }

    function clicaSubtrair() {
        mensagem(entrada1.current.value-entrada2.current.value)
    }
    function clicaMultiplicar() {
       mensagem(entrada1.current.value*entrada2.current.value)
    }
    function clicaDividir() {
        mensagem(entrada1.current.value/entrada2.current.value)
    }

    function mensagem(valor){
      setNumero(valor)
    }

  return (
    <div className="App">
      <input type="numb" ClassName="input-field " ref={entrada1}  ></input> 
      <button className="Button waves-effect waves-light btn red" onClick={clicaSomar}>+</button>
      <button className="Button waves-effect waves-light btn" onClick={clicaSubtrair}>-</button>
      <button className="Button waves-effect waves-light btn red" onClick={clicaMultiplicar}>*</button>
      <button className="Button waves-effect waves-light btn" onClick={clicaDividir}>/</button>
      <input type="numb" ClassName="input-field " ref={entrada2}  ></input> 

      {numero!==null&&(<div><p>={numero.toFixed(2)}</p></div>)}  
    </div>
  );
}

export default App;
