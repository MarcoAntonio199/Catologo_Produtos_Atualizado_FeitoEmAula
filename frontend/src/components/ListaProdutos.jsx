import Produto from "./Produto";

function ListaProdutos({produtos, busca}){

    if(produtos.lenght === 0){
        return <p>Nenhum produto cadaastrado.</p>;
    }

     return(
        <section className="estado-vazio">

            <span className="icone-vazio"></span>
            <h2>{busca ? "Nenhum produto encontrado" : "Nenhum produto cadastrado"}</h2>


            <p>
                {
                    busca
                    ? "Tente pesquisar outro nome"
                    : "Cadastre o primeiro produto para iniciar o catalogo"
                }
            </p>
        </section>
     )
}

    return(
      <section className="secao-produto">
        <div className="cabecalho-lista">
        <div>
        <span className="tag">INVENTARIO</span>
        <h2 className="titulo-secao">Produtos Cadastrados</h2>
        </div>

        <span className="resultado-lista"> {produtos.length} exibidos</span>

        </div>

        <div className="grid">
        {produtos.map((produto) => (
            <Produto key={produto.id} produto={produto}/>
        ))}
        </div>
      </section>  
    );