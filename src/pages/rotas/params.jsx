import { useRouter } from "next/router"
import Link from "next/link";

export default function params() {

    const router = useRouter();

    const id = router.query.id
    const nome = router.query.nome

    return (
        <div>
            <h1>Rotas Params: id: {id} nome: {nome}</h1>
            <Link href="/rotas">
                    <li>Voltar</li>
            </Link>
        </div>
    )
}