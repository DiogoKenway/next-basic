import { useRouter } from "next/router"


export default function nomeId() {
    const router = useRouter();
    
    console.log(router);

    const id = router.query.id;
    const nome = router.query.nome;
    
    return (
        <div>
            <h1>Rotas / Id: {id} / Nome: {nome}</h1>
        </div>
    )
}