import { useRouter } from "next/router"


export default function buscar() {
    const router = useRouter();
    
    console.log(router);

    const cod = +router.query.id;
    
    return (
        <div>
            <h1>Rotas / id: {cod} / Buscar!!!</h1>
        </div>
    )
}