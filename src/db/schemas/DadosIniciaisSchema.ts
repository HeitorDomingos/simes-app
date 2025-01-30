import { ObjectSchema } from "realm";

export const DadosIniciaisSchema: ObjectSchema = {
    name: "DadosIniciais",
    primaryKey: "Usuario",
    properties: {
      Usuario: "string",
      Perfil: "string",
      Msg: "string",
      Tema: "string",

    },
  };

