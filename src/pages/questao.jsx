import { useEffect, useState } from "react";

export default function questao() {

    const [questao, setQuestao] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/api/questao/123")
        .then(res  => res.json())
        .then(setQuestao);
    }, []);
    
    function renderizarResposta() {
        if (questao) {
            return questao.respostas.map((resp, i) => (
                <li key={i}>{resp}</li>
            ))
        } else {
            return;
        }
    }

    const resposta = renderizarResposta();

    return (
        <div>
            <h1>Questão</h1>
            <div>
               <span>{questao?.id}</span> - <span>{questao?.enunciado}</span>
                <ul>
                    {resposta}
                </ul>
            </div>
        </div>
    )
}