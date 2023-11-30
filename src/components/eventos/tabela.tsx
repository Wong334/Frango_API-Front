import React from "react";
import Produto from "@/core/Produto";
import { IconeEdicao, IconeLixo } from "../icones/tabela";

interface TabelaProps {
  produtos: Produto[];
  produtoSelecionado?: (produto: Produto) => void;
  produtoExcluido?: (produto: Produto) => void;
}

export default function Tabela(props: TabelaProps) {
  const exibirAcoes = props.produtoSelecionado || props.produtoExcluido;

  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-3">id</th>
        <th className="text-left p-3">nome</th>
        <th className="text-left p-3">tipo</th>
        <th className="text-left p-3">preco</th>
        {exibirAcoes && <th className="p-3">Ações</th>}
      </tr>
    );
  }

  function renderDados() {
    return props.produtos?.map((produto, i) => (
      <tr
        key={produto.id}
        className={`${i % 2 === 0 ? "bg-white" : "bg-yellow-100"} `}
      >
        <td className="text-left p-3">{produto.id}</td>
        <td className="text-left p-3">{produto.nome}</td>
        <td className="text-left p-3">{produto.tipo}</td>
        <td className="text-left p-3">{produto.preco}</td>
        {exibirAcoes && renderizarAcoes(produto)}
      </tr>
    ));
  }

  function renderizarAcoes(produto: Produto) {
    return (
      <td className="flex justify-center">
        {props.produtoSelecionado && (
          <button
            onClick={() => props.produtoSelecionado?.(produto)}
            className={`flex justify-center items
            text-green-600 rounded-full p-2 m-1
            hover:bg-gray-200`}
          >
            {IconeEdicao}
          </button>
        )}
        {props.produtoExcluido && (
          <button
            onClick={() => props.produtoExcluido?.(produto)}
            className={`flex justify-center items
            text-red-600 rounded-full p-2 m-1
            hover:bg-gray-200`}
          >
            {IconeLixo}
          </button>
        )}
      </td>
    );
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead
        className={`text-gray-100
        bg-gradient-to-r from-orange-500 to-red-600`}
      >
        {renderHeader()}
      </thead>
      <tbody>{renderDados()}</tbody>
    </table>
  );
}
