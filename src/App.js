import React from "react";
import { useState } from "react";
import './App.css'

const tabelaImc = () => {
    return (
        <table border='1' style={{borderCollapse:'collapse'}}>
        {/* table head */}
        <thead>
            {/* table row */}
            <tr>
                {/* table head */}    
                <th>
                    Classificação
                </th>
                <th>
                    IMC
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                {/* table data */}
                <td>Abaixo do Peso</td>
                <td>Abaixo de 18,5</td>
            </tr>
            <tr>
                {/* table data */}
                <td>Peso Normal</td>
                <td>Entre 18,5 e 24,9</td>
            </tr>
            <tr>
                {/* table data */}
                <td>Obsidade Grau I</td>
                <td>Entre 30 e 34,9</td>
            </tr>
            <tr>
                {/* table data */}
                <td>Obsidade Grau II</td>
                <td>Entre 35 e 39,9</td>
            </tr>
            <tr>
                {/* table data */}
                <td>Obesidade Grau III ou Mórbida</td>
                <td>Maior que 40</td>
            </tr>
        </tbody>
    </table>
    )
}
    
const funcPeso = (peso, setPeso) => {
    return (
        <div className="form-control">
            <label htmlFor="peso">Peso(kg)</label>
            <input type="text" name="peso" value={peso} onChange={(e) => {setPeso(e.target.value)}} placeholder="Insira seu Peso" required></input>
        </div>
    )
}

const funcAltura = (altura, setAltura) => {
    return (
        <div className="form-control">
            <label htmlFor="altura">Altura(m)</label>
            <input type="text" name="altura" value={altura} onChange={(e) => {setAltura(e.target.value)}} placeholder="Insira sua Altura" required></input>
        </div>
        
    )
}

const funcCalcular = (peso, altura, setResultado) => {
    const calculo = () => {
        /* peso dividido por altura x altura */
        setResultado(peso/(altura*altura))
    }
    return (
        <button type="submit" onClick={calculo}>Calcular IMC</button>
    )
}

const funcResultado = (resultado) => {
    return (
        /* Método toFixed para controlar o numero de casa Decimais  */
        <h2>Seu IMC é: {resultado.toFixed(2)}</h2>
    )
}

function App(){

    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)
    const [resultado, setResultado] = useState(0)
    
    return(
        <div className="container">
            <div className="header">
                <h2>React IMC</h2>
            </div>
            <div className="form">
                
                {funcPeso(peso, setPeso)}
                {funcAltura(altura, setAltura)}
                {funcCalcular(peso, altura, setResultado)}
                
            </div>            
            <div className="result">
                {funcResultado(resultado)}
            </div>
            <div className="sobre">
                {tabelaImc()}
            </div>
        </div>
    )
}

export default App