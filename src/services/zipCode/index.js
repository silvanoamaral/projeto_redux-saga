export const getZipcodeAPI = async (zipCode) => {
  console.log('service - getZipcodeAPI', zipCode)
  const response = await fetch(`https://api.pagar.me/1/zipcodes/${zipCode}`, { method: 'get' })
  const data = await response.json()
  return data
}