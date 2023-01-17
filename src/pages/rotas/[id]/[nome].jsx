import { useRouter } from "next/router"
import Link from "next/link";

export default function nomeId() {
    const router = useRouter();
    
    console.log(router);

    const id = router.query.id;
    const nome = router.query.nome;
    
    return (
        <div>
            <h1>Rotas / Id: {id} / Nome: {nome}</h1>
            <Link href="/rotas">
                    <li>Voltar</li>
            </Link>
        </div>
    )
}