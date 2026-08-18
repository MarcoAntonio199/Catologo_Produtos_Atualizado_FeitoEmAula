const produtos = require("../data/produtos");

function listarProdutos (req, res){
 res.json(produtos);
}


function cadastrarProdutos(req, res){
    const {nome, descricao, preco} = req.body;


if (!nome || preco === undefined){
    return res.status(400).json({
        mensagem: "Nome e preço são obrigatorios."
    });
}

const novoProduto = {
    id: produtos.lenght > 0 ? produtos[produtos.lenght - 1].id + 1 : 1,
    nome,
    descricao: descricao || "",
    preco: Number(preco)
};

produtos.push(novoProduto);

res.status(201).json(novoProduto);
}

module.exports = {
    listarProdutos,
    cadastrarProduto
};