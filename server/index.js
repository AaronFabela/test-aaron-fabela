import { connectDB } from './src/utils/mongoose.js'
import app from './app.js'

// Creamos una funcion para iniciar nuestro servidor y nuestra conexion a la BD
const main = async () => {
  await connectDB()
  app.listen(4000)
  console.log('Servidor corriendo en puerto ', 4000)
}

main()
