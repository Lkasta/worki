import jwt from 'jsonwebtoken'

// Função para verificar a autenticidade do token e obter o userId
export default function verifyToken(token: string, secretKey: string) {
  try {
    // Verifica e decodifica o token usando a chave secreta
    const decoded = jwt.verify(token, secretKey)

    console.log('decodificado', decoded)

    if (typeof decoded === 'object' && 'userId' in decoded) {
      return decoded.userId
    } else {
      return null
    }
  } catch (error) {
    // Se houver algum erro na verificação, retorne null
    return null
  }
}

module.exports = verifyToken
