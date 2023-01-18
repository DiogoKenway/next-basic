export default function questao(req, res) {
    if (req.method === "GET") {
        get(req, res)
    } else {
        res.status(405).send();
    }
}

function get(req, res) {
    const id = req.query.id
    return res.status(200).json({
        id,
        enunciado: "Qual a sua cor preferida?",
        respostas: [
            "Branco", "Vermelho", "Amarelo", "Verde"
        ]
    });
}