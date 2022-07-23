import React, { useState } from 'react';
import perguntas from './QtdPerg';
import Flashcards from './Deck';

function MenuPerguntas(props) {

    const [question, setPlay] = useState("pergunta");
    const [icon, setRotate] = useState( <ion-icon onClick= {() => play()} name="play-outline"></ion-icon>)
    
    function play() {
        setPlay("quest")
        setRotate(<img src="/imgs/rotate.svg"/>)
    }

    return (
        <div>
            <div class={question}>
                <p>{props.pergunta}</p>
                {icon}
            </div>
        </div>
    )
}

export default function Perguntas() {


    return (
        <>
            <div class="titleQuest">
                <img className="logo-pequeno" src="imgs/logo-pequeno.svg" />
                <p>ZapRecall</p>
            </div>

            {perguntas.map((item) => <MenuPerguntas pergunta={item.pergunta} />)}

            <div class="status">
                <p>0/4 CONCLUÍDOS</p>
            </div>
        </>
    )
}