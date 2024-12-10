export function authUser(data: string, password: string, type: string) {
  if (type === 'Email')
    return authByEmail(data, password)
  if (type === 'Phone')
    return authByPhone(data, password)

  return false
}

function authByEmail(data: string, password: string) {
  return data === 'gora@studio.ru' && password === '2024'
}

function authByPhone(data: string, password: string) {
  console.log(data)
  console.log(password)
  console.log(data === '+7 (921) 123-13-13' && password === '2024')
  return data === '+7 (921) 123-13-13' && password === '2024'
}
