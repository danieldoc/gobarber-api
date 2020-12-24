import { Router } from 'express'

const routes = new Router()

routes.get('/', (req, res) => {
    res.json({ message: 'Hello Mãe da foca in debug!' })
})

export default routes
