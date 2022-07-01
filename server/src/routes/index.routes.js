import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.send(
    '<h1>FullStack Challenge</h1></br><h1>Aaron Jhair Fabela Galvan</h1>'
  )
})

export default router
