import Produto from '../core/Produto';
 
let produtosList: Produto[] = [
  new Produto(1, "Pão de queijo", "Acompanhamento", 7.99),
  new Produto(2, "Frango Frito", "Frango", 12.99),
  new Produto(3, "Coxinha de Frango", "Salgado", 5.99),
  new Produto(4, "Wrap de Frango", "Sanduíche", 9.99),
  new Produto(5, "Salada Caesar com Frango", "Salada", 8.99),
  ]
  let proximoId = produtosList.length + 1;

  export const fetchProdutos = async (): Promise<Produto[]> => {
    try {
     await new Promise((resolve) => setTimeout(resolve, 500));
     return produtosList;
     } catch (error) {
     throw new Error('Erro ao buscar os Produtos');
     }
    };

    export const cadastrarProduto = async (novoProduto: Produto): Promise<Produto> => {
      try {
       await new Promise((resolve) => setTimeout(resolve, 500));
       novoProduto.id = proximoId++;
       produtosList.push(novoProduto);
       return novoProduto;
       } catch (error) {
       console.error("Erro ao cadastrar o Produto:" , error);
       throw error;
       }
      };
      
      export const atualizarProduto = async (produtoAtualizado : Produto): Promise<Produto> => {
        try {
         await new Promise((resolve) => setTimeout(resolve, 500));
         const index = produtosList.findIndex((produto) => produto.id === produtoAtualizado .id);
         if (index !== -1) {
          produtosList[index] = produtoAtualizado ;
         return produtoAtualizado ;
         } else {
         throw new Error('Produto não encontrado' );
         }
         } catch (error) {
         console.error("Erro ao atualizar o Produto:" , error);
         throw error;
         }
        };

        export const excluirProduto = async (id: number): Promise<void> => {
          try {
           await new Promise((resolve) => setTimeout(resolve, 500));
           produtosList = produtosList.filter((produto) => produto.id !== id);
           } catch (error) {
           console.error("Erro ao excluir o Produto:", error);
           throw error;
           }
          };