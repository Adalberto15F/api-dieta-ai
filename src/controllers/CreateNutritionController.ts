import { FastifyRequest, FastifyReply } from 'fastify'

class CreateNutritionController {
  async handle(request: FastifyRequest, reply: FastifyReply){
    console.log("Rota foi chamada!!")

    reply.send({ message: "Rota foi chamada meu cumpadi!"})
  }
}

export { CreateNutritionController }