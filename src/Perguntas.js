import React, { useState } from 'react';

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

    const perguntas = [
        { pergunta: "Pergunta 1" },
        { pergunta: "Pergunta 2" },
        { pergunta: "Pergunta 3" },
        { pergunta: "Pergunta 4" }
    ]

    const Flashcards = [
        {Flashcard: "O que é JSX?"},
        {Flashcard: "O React é __"},
        {Flashcard: "Componentes devem iniciar com __"},
        {Flashcard: "Podemos colocar __ dentro do JSX"},
        {Flashcard: "O ReactDOM nos ajuda __ "},
        {Flashcard: "Usamos o npm para __"},
        {Flashcard: "Usamos props para __ "},
        {Flashcard: "Usamos estado (state) para __"}
    ]

    return (
        <div>
            <div class="titleQuest">
                <img className="logo-pequeno" src="imgs/logo-pequeno.svg" />
                <p>ZapRecall</p>
            </div>

            {perguntas.map((item) => <MenuPerguntas pergunta={item.pergunta} />)}

            <div class="status">
                <p>0/4 CONCLUÍDOS</p>
            </div>
        </div>
    )
}