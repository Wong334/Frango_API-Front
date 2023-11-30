import { stringParaEntradaDeData } from "@/utils/converters";

export default class Produto {
    id: number | null;
    nome: string;
    tipo: string;
    preco: number;


    constructor(id: number | null, nome: string, tipo: string,
      preco: number) {
        this.id = id;
        this.nome = nome;
        this.tipo = tipo;
        this.preco = preco;
    }

    static geraProdutosMock() {
        return [
            new Produto(1, "Pão de queijo","Acompanhamento",7.99,),
          new Produto(2, "Frango Frito","Frango",12.99)
        ]
      }


      static vazio(): Produto {
        return new Produto(null, "", "", 0.0);
    }
}