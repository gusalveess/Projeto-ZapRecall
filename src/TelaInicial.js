import React, {useState} from 'react';
import Perguntas from './Perguntas';

export default function Inicio() {

    const [TelaInicial, setEsconder]  = useState("Telainicial")
    const [TelaPerguntas, removeEsconder] = useState("tela-de-perguntas hidden")

    function trocar(){
        setEsconder("Telainicial hidden")
        removeEsconder("tela-de-perguntas")
    }

    return (
        <div>
            <div class={TelaInicial}>
                <img className="Logo" src="imgs/Logo.svg" />
                <p className="title">ZapRecall</p>
                <button onClick={() => trocar() } className="iniciar">Iniciar Recall!</button>
            </div>

            <div class={TelaPerguntas}>
                <Perguntas />
            </div>
        </div>
    )
}