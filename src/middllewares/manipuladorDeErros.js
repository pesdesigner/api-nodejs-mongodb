import mongoose from "mongoose";
import ErroBase from "../erros/ErroBase.js";
import RequisicaoInconrreta from "../erros/RequisicaoIncorreta.js";
import ErroValidacao from "../erros/ErroValidacao.js";

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(erro, req, res, next) {
  if (erro instanceof mongoose.Error.CastError) {

    new RequisicaoInconrreta().enviarResposta(res);

  } else if (erro instanceof mongoose.Error.ValidationError) {

    new ErroValidacao(erro).enviarResposta(res);

  } else if (erro instanceof ErroBase){

    erro.enviarResposta(res);

  } else {

    new ErroBase().enviarResposta(res);

  }
}

export default manipuladorDeErros;