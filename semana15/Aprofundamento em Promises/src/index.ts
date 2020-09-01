import axios from 'axios'

//Exercício 1
//a) O endpoint getSubscribers.
//b) usando o any[], ou type[] caso saiba como retornará o endpoint.
const baseUrl: string = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"
//c) 
    // async function getAllSubscribers ():Promise<any[]> {
    //     const subscribers = await axios.get(`${baseUrl}/subscribers/all`)
    //     console.log(subscribers.data)
    //     return subscribers.data
    // }
    // getAllSubscribers()

//Exercício 2
//a) A função nomeada assincrona inicia sua sintaxe com o async function nome, já a arrow function inicia com const nome = async() => {}.
//b) 
const getAllSubscribers = async():Promise<subscriber[]> => {
    const subs = await axios.get(`${baseUrl}/subscribers/all`)
    return subs.data.map((sub:subscriber) => {
        return {
            id: sub.id,
            name: sub.name,
            email: sub.email
        }
    })
}

        
//Exercício 3
    type subscriber = {
        id: string;
        name: string,
        email: string
    }
//a) Dá um erro pois o array que retorna do axios é um objeto que tem o data por cima, então não dá pra tipar o retorno.
//b) Usamos o any pois não sabemos ainda o retorno do endpoint, desta maneira não tem como tipar antes de saber qual o formato que virá.
//c) Feito acima.

//Exercício 4
//a) Tipo Void pois não retorna nada.
//b) 
    const createNews = async( title: string, content: string, date:number = Date.now()):Promise<void> => {
        const body = {
            title,
            content,
            date
        }
        await axios.put(`${baseUrl}/news`, body)
    }

//Exercício 5
//a) o forEach fica confuso e não sabe direito a ordem de realizar as ações, desta maneira não é muito recomendável utiliza-lo.
//b)
    // const sendNotifications = async(sub: subscriber, message: string):Promise<void> => {
    //     await axios.post(`${baseUrl}/notifications/send`, {
    //         subscriberId: sub.id,
    //         message
    //     })
    // }

//Exercício 6
//a) O promise.all recebe um array com as funções assincronas, respeitando a ordem em que foi escrita no caso de um for of.
//b) A vantagem é que caso seja executada várias vezes, que é o caso de enviar para cada subscriber, ele vai fazer na sequencia do array que foi colocado como parametro no promises.all
//c)
const sendNotifications = async(subs: subscriber[], message: string):Promise<void> => {
    const promiseArray = []
    for (const sub of subs) {
        promiseArray.push(
            await axios.post(`${baseUrl}/notifications/send`, {
                subscriberId: sub.id,
                message
            })        
        )
    }
    await Promise.all(promiseArray)
}

//Exercício 7
//a)
const newSubscriber = async(name: string, email: string):Promise<void> => {
    await axios.put(`${baseUrl}/subscribers`, {
        name,
        email
    })
}



const main = async () => {
    try{
        const subscribers = await getAllSubscribers()
        // await createNews("Bora detona no backend", "Aprendendo promises no backend e tentando não fritar o cérebro.")
        // await newSubscriber("Diego", "diego@gmail.com")
        console.log(subscribers)
    }
    catch(e){
        console.log(e.response.data)
    }
}

main()