import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: {type: String},
    titulo: {type: String, required: [true, "Título do livro é obrigatório!"]},
    autor: {type: mongoose.Schema.Types.ObjectId, ref: "autores", required: [true, "O nome do(a) autor(a) é obrigatório!"]},
    editora: {
      type: String,
      required: [true, "O nome da Editora é obrigatório!"],
      enum: {
        values: ["Casa do código", "Alura"],
        message: "A Editora {VALUE} não é um valor permitido"
      }
    },
    numeroPaginas: {
      type: Number,
      validate: {
        validator: (valor) => {
          return valor >= 10 && valor <= 5000;
        },
        message: "Número de páginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"
      }
    }
  }
);

const livros= mongoose.model("livros", livroSchema);

export default livros;