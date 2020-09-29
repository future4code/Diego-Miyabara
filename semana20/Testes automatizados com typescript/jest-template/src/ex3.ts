export enum LOCATION{
    EUA = "EUA",
    BRAZIL = "BRAZIL"
}

export enum NACIONALITY {
    BRAZILLIAN = "BRAZILLIAN",
    AMERICAN = "AMERICAN"
}

export interface User {
    name: string,
    age: number,
    nacionality: NACIONALITY
}

export interface Cassino {
    name: string,
    location: LOCATION
}

export interface Result {
    brazillians: ResultItem,
    americans: ResultItem
}

export interface ResultItem {
    allowed: string[],
    unallowed: string[]
}

export function verifyAge(cassino: Cassino, users: User[]): Result {
    const allowed: User[] = []
    const unallowed: User[] = []

    for (const user of users) {
        if(cassino.location === LOCATION.EUA){
            if(user.age >= 21){
                allowed.push(user)
            }else {
                unallowed.push(user)
            }
        }
        if(cassino.location === LOCATION.BRAZIL){
            if(user.age >= 18){
                allowed.push(user)
            }else {
                unallowed.push(user)
            }
        }
    }
    return {
        brazillians: {
            allowed: allowed.filter((user) => {
                if(user.nacionality === NACIONALITY.BRAZILLIAN){
                    return true
                }
            }).map((u) => {
                return u.name
            }),
            unallowed: unallowed.filter((user) => {
                if (user.nacionality === NACIONALITY.BRAZILLIAN) {
                    return true
                }
            }).map((u) => {
                return u.name
            })
        },
        americans: {
            allowed: allowed.filter((user) => {
                if (user.nacionality === NACIONALITY.AMERICAN){
                    return true
                }
            }).map((u) => {
                return u.name
            }),
            unallowed: unallowed.filter((user) => {
                if(user.nacionality === NACIONALITY.AMERICAN){
                    return true
                }
            }).map((u) => {
                return u.name
            })
        }
    }
}