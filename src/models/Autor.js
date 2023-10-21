import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: {
      type: String, 
      required: [true, "O nome do(a) autor(a) é obrigatório!"]
    },
    nacionalidade: {type: String}
  },
  {
    versionKey: false
  }
);

const autores = mongoose.model("autores", autorSchema);

export default autores;

// O versionKey é uma propriedade definida em cada documento quando criado pela primeira vez pelo Mongoose.
// Este valor de chave contém a revisão interna do documento. A opção versionKey é uma string que representa o caminho a ser usado para controle de versão.
// O padrão é __v.