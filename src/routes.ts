import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply
} from 'fastify'
import { CreateNutritionController } from './controllers/CreateNutritionController'

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

  fastify.get("/teste", (request: FastifyRequest, reply: FastifyReply) => {
    
    let responseText = "```json\n{\n  \"nome\": \"Adalberto\",\n  \"sexo\": \"Masculino\",\n  \"idade\": 24,\n  \"altura\": 1.8,\n  \"peso\": 70,\n  \"objetivo\": \"Ganho de peso\",\n  \"refeicoes\": [\n    {\n      \"horario\": \"08:00\",\n      \"nome\": \"Cafe da manha\",\n      \"alimentos\": [\n        \"2 fatias de pao integral\",\n        \"1 ovo mexido\",\n        \"1 banana\",\n        \"1 copo de leite desnatado\",\n        \"1 colher de sopa de azeite de oliva\"\n      ]\n    },\n    {\n      \"horario\": \"10:00\",\n      \"nome\": \"Lanche da manha\",\n        \"alimentos\": [\n        \"1 iogurte grego com granola\",\n        \"1 maça\"\n      ]\n    },\n    {\n      \"horario\": \"12:30\",\n      \"nome\": \"Almoco\",\n      \"alimentos\": [\n        \"150g de frango grelhado\",\n        \"1 concha de arroz integral\",\n        \"1 concha de feijao preto\",\n        \"Salada de folhas verdes com tomate e cenoura\"\n      ]\n    },\n    {\n      \"horario\": \"15:00\",\n      \"nome\": \"Lanche da tarde\",\n      \"alimentos\": [\n        \"1 sanduiche de peito de peru com queijo branco\",\n        \"1 banana\"\n      ]\n    },\n    {\n      \"horario\": \"19:00\",\n      \"nome\": \"Jantar\",\n      \"alimentos\": [\n        \"150g de carne vermelha magra\",\n        \"1 batata doce\",\n        \"1 concha de brócolis\",\n        \"Salada de folhas verdes com tomate e pepino\"\n      ]\n    },\n    {\n      \"horario\": \"21:00\",\n      \"nome\": \"Lanche antes de dormir\",\n      \"alimentos\": [\n        \"1 scoop de whey protein\"\n      ]\n    }\n  ],\n  \"suplementos\": [\n    \"Whey Protein\",\n    \"Creatina\",\n    \"BCAA\"\n  ]\n}\n```"

    try{
      //Extrair o JSON
      let jsonString = responseText.replace(/```\w*\n/g,'').replace(/\n```/g,'').trim();

      let jsonObject = JSON.parse(jsonString)

      return reply.send({ data: jsonObject });

    }catch(err){
      console.log(err)
    }

    reply.send({ ok: true })

  })

  fastify.post("/create", async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateNutritionController().handle(request, reply)
  })

}