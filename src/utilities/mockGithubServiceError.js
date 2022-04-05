export const message404 = 'Não encontrado'
export const defaultMessage = 'Ocorreu um erro ao tentar completar sua solicitação'


export const mockGithubService404Error = () => {
  return { response: { status: 404 } }
}

export const mockGithubServiceError = () => {
  return { response: { status: 500 } }
}
