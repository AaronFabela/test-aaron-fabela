import mongoose from 'mongoose'

const MONGO_URI =
  'mongodb+srv://aaronfabela:fullstack@cluster1.gy8pp.mongodb.net/?retryWrites=true&w=majority'

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI)
    console.log('Se conecto correctamnete a la DB')
  } catch (error) {
    console.log(error)
  }
}
