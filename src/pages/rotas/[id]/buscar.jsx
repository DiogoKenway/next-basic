import { useRouter } from "next/router"
import Link from "next/link";

export default function buscar() {
    const router = useRouter();
    
    console.log(router);

    const cod = +router.query.id;
    
    return (
        <div>
            <h1>Rotas / id: {cod} / Buscar!!!</h1>
            <Link href="/rotas">
                    <li>Voltar</li>
            </Link>
        </div>
    )
}