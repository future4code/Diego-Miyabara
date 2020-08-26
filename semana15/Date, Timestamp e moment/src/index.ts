import moment from 'moment'
import { format } from 'path'

moment.locale('pt-br')
moment.updateLocale('pt-br', {
    months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    weekdays: ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"]
})
//Exercício 1
//a)
type event = {
    name: string,
    description: string,
    startAt: moment.Moment,
    finishAt: moment.Moment
}
//b)
const allEvents: event[] = [
	{
		name: "Stand-up",
		description: "Stand-up pelo Zoom",
		startAt: moment("25/08/2020 16:30", "DD/MM/YYYY HH:mm"),
        finishAt: moment("25/08/2020 16:40", "DD/MM/YYYY HH:mm")
	},
	{
		name: "101",
		description: "101 com CX via Zoom",
		startAt: moment("29/08/2020 13:30", "DD/MM/YYYY HH:mm"),
        finishAt: moment("29/08/2020 14:00", "DD/MM/YYYY HH:mm")
	}
]
//Exercício 2 e 3
//2a)
const formatEvents = (events:event[]):void => {
    allEvents.forEach((event: event) => {
        const duration = event.finishAt.diff(event.startAt, "minutes")
        const today = moment()
        today.utcOffset("-0300")
        const daysUntilEvent = event.startAt.diff(today, "days")
        console.log(
            `
            Nome: ${event.name}
            Horário de início: ${event.startAt.format('dddd, DD [de] MMMM [de] YYYY, HH:mm')}
            Horário de fim: ${event.finishAt.format('DD [de] MMMM [de] YYYY, HH:mm')}
            Descrição: ${event.description}
            Duração: ${duration} minutos
            Dias até o evento: ${daysUntilEvent}
            `
        )
    })
}
//2b) Teria que alterar o moment.locale para en provavelmente, o formato da data e o fuso horário.

//Exercício 4
function createEvent (
    name: string,
    description: string,
    startAt: moment.Moment,
    finishAt: moment.Moment
):void {
    const today = moment()
    today.utcOffset("-0300")
    const verifyStartDate = startAt.diff(today, "seconds")
    const verifyFinishDate = finishAt.diff(today, "seconds")
    if(!name || !description || !startAt || !finishAt){
        console.log("Está faltando alguma informação, verifique e tente novamente")
        return
    } else if(verifyStartDate < 0 || verifyFinishDate < 0) {
        console.log("As datas não podem ser anteriores ao de hoje!")
        return
    } else {
        allEvents.push({name, description, startAt, finishAt})
    }    
}

const newEvent:event = {
    name: "Challenge", 
    description: "Challenge do exercício de Datem Timestamp e Moment", 
    startAt: moment("27/08/2020 15:00", "DD/MM/YYYY HH:mm"), 
    finishAt: moment("27/08/2020 23:59", "DD/MM/YYYY HH:mm")
}

createEvent(newEvent.name, newEvent.description, newEvent.startAt, newEvent.finishAt)
formatEvents(allEvents)