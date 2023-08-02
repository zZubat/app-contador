type Props ={
    texto: string
    aoCliclar: () => void
}

function Botao(props: Props) {
    return(
        <button onClick={props.aoCliclar}>{props.texto}</button>
    )
}

export default Botao;