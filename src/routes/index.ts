import { Router, Request, Response } from "express"
import * as homeController from '../controllers/homeController'
import * as userController from '../controllers/userController'

const router = Router()

router.get('/',homeController.home)
router.get('/login',userController.login)
router.post('/login-resultado',userController.login)
router.get('/idade',userController.idade)
router.post('/idade-resultado',userController.idade)
//ROTA ESTÁTICA
router.get('/contato',userController.contato)
//ROTA DINÂMICA
router.get('/noticia/:noticia',userController.noticias)
router.get('/nome',userController.nome)

export default router