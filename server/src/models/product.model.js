import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
  code: String,
  name: String,
  price: String,
})

export default mongoose.model('Product', productSchema)
