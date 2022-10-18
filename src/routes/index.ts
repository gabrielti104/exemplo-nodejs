import { Router, Request, Response } from "express"

const router = Router()

router.get('/',(req:Request,res:Response) =>{

   let user:string = 'Viviane'

    res.render('home',{
       user,
       produtos:[
        {titulo:'Livro Crepusculo',preco:39},
        {titulo:'Arroz São João', preco: 15},
        {titulo:'Bombril', preco:5},
        {titulo:'Salgadinho Fofura',preco:3}
       ],frases:[
        'A guerra contra as drogas é inutil pois acaba morrendo os dois lados',
        'A Vingança é plena mata alma e envenena',
        'Prefiro morrer do que perder a vida',
        'A vida passa mais rápido do que uma Ferrari na estrada'
       ]

    })
})

router.get('',(req:Request,res:Response) =>{
    res.render('login',{
        name:'Fulano',
        lastName:'Fulaninho',
        showWelcome:false
    })
})

router.get('/idade',(req:Request,res:Response) =>{
    res.render('pages/idade')
})

router.post('/idade-resultado',(req:Request,res:Response) =>{
    let mostrarIdade: boolean = false
    let idade:number = 0

    if(req.body.ano){
        let ano:number = parseInt(req.body.ano as string)
        let anoAtual:number = new Date().getFullYear()
        idade = ano - anoAtual
        mostrarIdade = true
    }


    res.render('pages/idade',{
        mostrarIdade,
        idade
    })
})

//ROTA ESTÁTICA
router.get('/contato',(req:Request,res:Response) =>{
    res.send("PAGINA DE CONTATO")
})
//ROTA DINÂMICA
router.get('/noticia/:noticia',(req:Request,res:Response) =>{
    let noticia: string = req.params.noticia
    res.send(`Noticias: ${noticia}`)
})

router.get('/viagens/:origem-:destino',(req:Request,res:Response) =>{
    let origem:string = req.params.origem
    let destino:string = req.params.destino

    res.send(`Procurando trajetos de ${origem} até ${destino}`)
})

router.get('/nome',(req:Request, res:Response) =>{

    let nome: string = req.query.nome as string
    let idade: number = parseInt (req.query.idade as string)
    let telefone: number = parseInt (req.query.telefone as string)
    let endereco: string = req.query.endereco as string

    res.render('pages/nome',{
        nome,
        idade,
        telefone,
        endereco
    })
})

router.get('/login',(req:Request, res:Response) =>{
    res.render('pages/login')
})

router.post('/login-resultado',(req:Request, res:Response) =>{
    let email: string = req.body.email as string
    let senha: string = req.body.senha as string

    res.render('pages/login',{
        email,
        senha,
    })
})



export default router