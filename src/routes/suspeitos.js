import { Router } from "express";

const suspeitosRoutes = Router();

let suspeitos = [
];

//Rota para buscar todas os suspeitos em lista;
suspeitosRoutes.get("/", (req, res) => {
    return res.status(200).send(suspeitos);
});

//Rota para criar um novo suspeito
suspeitosRoutes.post("/", (req, res) => {
    const {nome, profissao, envolvimento, nivelSuspeita } = req.body;

    //Validação dos valores nome, profissão e nível de suspeita
    if (!nome || !profissao || !nivelSuspeita) {
        return res.status(404).send({
            message: "Os campos de nome, profissão ou nível de suspeita não foram preenchidos."
        })
    }
    //Validação do campo de nível de suspeita
    if (nivelSuspeita !== "baixo" || nivelSuspeita !== "médio" || nivelSuspeita !== "alto"){
        return res.status(404).send({
            message: "Campo de nível de suspeita não preenchido devidamente"
        });
    }
    const novoSuspeito = {
        id: Math.floor(Math.random() * 1000000),
        nome,
        profissao,
        envolvimento,
        nivelSuspeita,
    };
    suspeitos.push(novoSuspeito);

    return res.status(200).send(suspeitos);
});

suspeitosRoutes.get("/:id", (req, res) => {
    const { id } = req.params;

    //console.log(id);
    const suspeito = suspeitos.find((suspect) => suspect.id == id);
    if (!suspeito) {
        return res.status(404).send({
            message: "O ID indicado não correspoonde a nenhum suspeito",
        });
    };

    return res.status().send({
        message: "",
        suspeito,
    });
});


//rota para buscar um suspeito por seu ID
suspeitosRoutes.get("/:id", (req, res) => {
    const { id } = req.params;

    //console.log(id);
    const suspeito = suspeitos.find((suspect) => suspect.id == id);
    if (!suspeito) {
        return res.status().send({
            message: "",
        });
    };

    return res.status().send({
        message: "",
        suspeito,
    });
});

suspeitosRoutes.put("/:id", (req, res) => {
    const { id } = req.params;
    const suspeito = suspeitos.find((suspect) => suspect.id == id);
    if (!suspeito) {
        return res.status().send({
            message: "O ID indicado não corresponde ",
        });
    };
    const {} = req.body;
    suspeito.nome = nome;
    suspeito.profissao = profissao;
    suspeito.envolvimento = envolvimento;
    suspeito.nivelSuspeita = nivelSuspeita;

    return res.status(200).send({
        message: "", suspeito,
    });
});

suspeitosRoutes.delete("/:id", (req, res) => {
    const { id } = req.params;
    const suspeito = suspeitos.find((suspect) => suspect.id == id);
    if (!suspeitos) {
        return res.status().send({
            message: "",
        });
    };

    suspeitos = suspeitos.filter((suspect) => suspect.id != id);

    return res.status(200).send({
        message: "", suspeito,
    });
});

export default suspeitosRoutes;