import Link from "next/link";
import Router from "next/router";

export default function rotas() {

    function simpleNavigation(url) {
        Router.push(url);
    }

    function navigationWithParameters() {
        Router.push({
            pathname: "/rotas/params",
            query: {
                id: 12,
                nome: "Ana"
            }
        })
    }

    return (
        <div>
            <h1>Rotas index</h1>
            <ul>
                <Link href="/rotas/params?id=12&nome=Ana">
                    <li>Params</li>
                </Link>
                <Link href="/rotas/123/buscar">
                    <li>buscar</li>
                </Link>
                <Link href="/rotas/123/Daniel">
                    <li>Daniel</li>
                </Link>
            </ul>
            <div style={{ display: "flex", gap: "15px", flexDirection: "column", alignItems: "start" }}>
                <button onClick={navigationWithParameters}>Params</button>
                <button onClick={() => Router.push("/rotas/123/buscar")}>Buscar</button>
                <button onClick={ () => simpleNavigation("/rotas/123/Daniel")}>Daniel</button>
            </div>
        </div>
    )
}