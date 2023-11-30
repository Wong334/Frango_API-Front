'use client';
import Produto from "@/core/Produto";
import { atualizarProduto, cadastrarProduto, excluirProduto, fetchProdutos } from "@/service/produtoService";
import Botao from "@/components/eventos/botao";
import Formulario from "@/components/eventos/formulario";
import Layout from "@/components/eventos/layout";
import Tabela from "@/components/eventos/tabela";
import { useEffect, useState } from "react";

export default function Eventos() {
  const [produto, setProduto] = useState<Produto>(Produto.vazio());
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela');
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    if (visivel === 'tabela') {
      const loadProdutos = async () => {
        try {
          const dados = await fetchProdutos();
          setProdutos(dados);
        } catch (error) {
          console.error("Erro ao buscar produtos:", error);
        }
      }

      loadProdutos();
    }
  }, [visivel]);

  function produtoSelecionado(produto: Produto) {
    setProduto(produto);
    setVisivel('form');
  }

  async function produtoExcluido(produto: Produto) {
    const confirmacao = window.confirm("Tem certeza de que deseja excluir este produto?");
    if (confirmacao) {
      try {
        if (produto.id !== null) {
          await excluirProduto(produto.id);
        } else {
          console.error("produtoId é null!");
        }
        setProdutos(prevProdutos => prevProdutos.filter(prod => prod.id !== produto.id));
      } catch (error) {
        console.error("Erro ao excluir produto:", error);
      }
    }
  }

  function salvarOuAlterarProduto(produto: Produto) {
    if (produto.id) {
      alterarProduto(produto);
    } else {
      salvarProduto(produto);
    }
  }

  async function alterarProduto(produto: Produto) {
    try {
      const produtoAtualizado = await atualizarProduto(produto);
      setVisivel("tabela");
    } catch (error) {
      console.error("Erro ao atualizar produto:", error);
    }
  }

  async function salvarProduto(produto: Produto) {
    try {
      const novoProduto = await cadastrarProduto(produto);
      setVisivel("tabela");
    } catch (error) {
      console.error("Erro ao salvar produto:", error);
    }
  }

  function novoProduto() {
    setProduto(Produto.vazio());
    setVisivel("form");
  }

  return (
    <div className={`
     flex justify-center items-center h-screen
     bg-gradient-to-bl  from-orange-400 via-yellow-200 to-orange-500
     text-black`}
    >
      <Layout titulo={<h1 className="text-center">Produtos</h1>}>
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao className="mb-4" cor="bg-gradient-to-r from-green-500 to-green-700"
                onClick={() => novoProduto()}>
                Novo produto
              </Botao>
            </div>
            <Tabela produtos={produtos}
              produtoSelecionado={produtoSelecionado}
              produtoExcluido={produtoExcluido}
            />
          </>
        ) : (
          <Formulario produto={produto}
            produtoMudou={salvarOuAlterarProduto}
            cancelado={() => setVisivel('tabela')}
          />
        )}
      </Layout>
    </div>
  );
}
