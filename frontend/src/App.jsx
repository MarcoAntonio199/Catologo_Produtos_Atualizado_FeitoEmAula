import { useEffect, useState } from "react";
import Header from "./components/Header";
import FormProduto from "./components/FormProduto";
import ListaProdutos from "./components/ListaProdutos";

import Footer from ".././src/components/Footer";

export default function App(){
    const [produtos, setProdutos] = useState([]);
    const [mensagem, setMensagem] = useState("");

    const [busca, setBusca] = useState("");

     async function carregarProdutos() {
        try{
            const resposta = await fetch("/api/produtos");
        const dados = await resposta.json();

        setProdutos(dados);
        }catch (erro){
        setMensagem("Nao foi possivel carregar os produtos", erro)
        }
     }

     useEffect(()=>{
        carregarProdutos();
     }, []);

     async function cadastrarProduto(produto){
        setMensagem("");


        try{
            const resposta = await fetch ("/api/produtos", {
                method: "Post",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(produto)
            });

            if (!resposta.ok){
                const erro = await resposta.json();
                setMensagem(erro.mensagem);
                return;
            }

            const novoProduto = await resposta.json();

            setProdutos((produtosAtuais) => [...produtosAtuais, novoProduto])
            setMensagem("Produto cadastrado com sucesso");
        

        }catch (erro){
            setMensagem("nao foi possivel cadastrar o produto", erro);
        }
     }


     const produtosFiltados = produtos.filter((produto)=> 
        produto.nome.toLowerCase().includes(busca.toLocaleLowerCase())
    ); 




      return(
        <>
        <Headers/>

        <main className="container">

        <section className="painel-resumo">
            <div>
                <span className="tag">Projeto integrador</span>
                <h2>Evolução de catalogo</h2>

                <p>Front-end em react conectado a api do porjeto</p>
            </div>

            <div className="contador-produtos">
                <span>Total de produtos</span>
                <strong>{produtos.length}</strong>
            </div>
        </section>

        <FormProduto aoCadastrar={cadastrarProduto}/>

        {mensagem && <p className="mensagem">{mensagem}</p>}

        <section className="area-busca">
            <div>
            <span className="tag"> Busca Rapida </span>
            <h2>Encontre um produto</h2>
            </div>

            <input 
            type="text" 
            value={busca}
            onChange={(evento)=> setBusca(evento.target.value)}
            placeholder="Digite o nome do produto"
            />
            </section> 

        <ListaProdutos produtos={produtos}/>
        </main>

            <Footer/>
</>
    )
}