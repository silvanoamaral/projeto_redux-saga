export const getCpfCnpjAPI = async () => {
  console.log('service - getCpfCnpjAPI')
  const response = await fetch(`http://demo6214975.mockable.io/cpf`, { method: 'get' })
  const data = await response.json()
  return data
}