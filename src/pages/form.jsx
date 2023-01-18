import { useState } from "react"

export default function form() {

    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState(0);
    const [usuario, setUsuarios] = useState([]);

    async function salvarUsuario() {
        await fetch("/api/form", {
            method: "POST",
            body: JSON.stringify({ nome, idade })
        })

        const res = await fetch("/api/form");
        const usuarios = await res.json()
        setUsuarios(usuarios)

        setNome("");
        setIdade(0);
    }

    function renderizarUsuarios() {
        return usuario.map((user, i) => (
            <li key={i}>{user.nome} tem {user.idade} anos</li>
        ))
    }

    return (
        <div>
            <h1>Integrando com API #02</h1>
            <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
            <input type="number" value={idade} onChange={e => setIdade(+e.target.value)} />
            <button onClick={salvarUsuario}>Enviar</button>
            <ul>
                {renderizarUsuarios()}
            </ul>
        </div>
    )
}