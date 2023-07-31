import JWT from 'jsonwebtoken'

const generateToken=(id )=>{
    return JWT.sign({id},"group72")
}
export default generateToken