export default function questao(req, res) {
    if (req.method === "GET") {
        const id = req.query.id
        res.status(200).json({
            id,
            enunciado: "Qual a sua cor preferida?",
            respostas: [
                "Branco", "Vermelho", "Amarelo", "Verde"
            ]
        });
    } else {
        res.status(405).send();
    }
}


