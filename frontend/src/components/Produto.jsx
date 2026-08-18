export default function Produto ({produto}){

    return(

        <article className="card">

        <div className="card-topo">

        <span className="codigo-produto"> Item #{produto.id}</span>
        <span className="disponivel">Disponivel</span>
        </div>

            <h2>{produto.nome}</h2>
            <p>{produto.descricao}</p>

        <div className="preco-produto">
            <span>Preco</span>
        </div>

        <strong>
            R$ {Number(Produto.preco).toFixed(2).replace(".", ",")}
        </strong>

        </article>
    );
} export default Produto;