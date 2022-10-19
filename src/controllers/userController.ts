import { Request, Response } from "express"

export const login = ((req:Request, res:Response) =>{
    let email: string = req.body.email as string
    let senha: string = req.body.senha as string

    res.render('pages/login',{
        email,
        senha,
    })
})

export const idade = ((req:Request, res:Response) =>{
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

export const contato = ((req:Request, res:Response) =>{
    res.send("PAGINA DE CONTATO")
})

export const noticias = ((req:Request, res:Response) =>{
    let noticia: string = req.params.noticia
    res.send(`Noticias: ${noticia}`)
})

export const nome = ((req:Request, res:Response) =>{
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