import React, { useState } from 'react';

function MenuPerguntas(props) {
    return (
        <div>
            <div class="pergunta">
                <p>{props.pergunta}</p>
                <ion-icon name="play-outline"></ion-icon>
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