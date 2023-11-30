import Produto from "@/core/Produto";
import Entrada from "./entrada";
import { useState } from "react";
import { stringParaEntradaDeData } from "@/utils/converters";
import Botao from "./botao";


interface FormularioProps {
  produto: Produto;
  produtoMudou?: (produto: Produto) => void;
  cancelado?: () => void;
}

export default function Formulario(props: FormularioProps) {
    const { id, nome, tipo, preco } = props.produto || {};
    const [nomeState, setNome] = useState(nome);
    const [tipoState, setTipo] = useState(tipo);
    const [precoState, setPreco] = useState(preco || 0);

  
    
  const handleSalvar = () => {
    const produtoModificado = new Produto(id, nomeState, tipoState, precoState);
    props.produtoMudou?.(produtoModificado);
  };

  return (
    <div>
      {id ? (
        <Entrada texto="id" valor={id} somenteLeitura></Entrada>
      ) : (
        false
      )}
      <Entrada texto="Nome" valor={nomeState} onChange={setNome}></Entrada>
      <Entrada
        texto="Tipo"
        valor={tipoState}
        onChange={(valor) => setTipo(valor)}
      ></Entrada>
      <Entrada
        texto="Preço"
        valor={precoState.toString()}
        onChange={(valor) => setPreco(Number(valor))}
      ></Entrada>
      <div className="flex justify-end mt-5">
        <Botao
          className="mr-3"
          cor="bg-gradient-to-r from-blue-500 to-blue-700"
          onClick={handleSalvar}
        >
          {id ? "Alterar" : "Salvar"}
        </Botao>
        <Botao
          cor="bg-gradient-to-r from-gray-500 to-gray-700"
          onClick={props.cancelado}
        >
          Cancelar
        </Botao>
      </div>
    </div>
  );
}
