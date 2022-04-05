export class GithubServiceError extends Error {

  constructor({ response }) {
    let message

    switch (response.status) {
      case 404:
        message = 'Não encontrado'
        break
      default:
        message = 'Ocorreu um erro ao tentar completar sua solicitação'
        break
    }

    super(message)
  }

  
}