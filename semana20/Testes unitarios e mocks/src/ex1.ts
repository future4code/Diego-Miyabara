export interface Character {
    name: string,
    life: number,
    strength: number,
    defense: number
}

export const validateCharacter = (input: Character) : boolean => {
    if(!input.name || input.life === undefined || input.strength === undefined || input.defense === undefined) {
        return false
    }

    if(input.life <= 0 || input.strength <= 0 || input.defense <=0) {
        return false
    }

    return true
}

export const performAttack = (attacker: Character, defender: Character): void => {
    if(!validateCharacter(attacker) || !validateCharacter(defender)) {
        throw new Error ("Invalid Character!")
    }

    if(attacker.strength > defender.defense) {
        defender.life = defender.life - (attacker.strength - defender.defense)
    }

    if(attacker.strength < defender.defense) {
        throw new Error ("The attack had no effect!")
    }
}

export const performAttack2 = (attacker: Character, defender: Character, validator:(input: Character) => boolean) => {
    if(!validator(attacker) || !validator(defender)){
        throw new Error ("Invalid Character!")
    }
    
    if(attacker.strength > defender.defense) {
        defender.life = defender.life - (attacker.strength - defender.defense)
    }

    if(attacker.strength < defender.defense) {
        throw new Error ("The attack had no effect!")
    }
}

export const recoverCharacters = (characters: Character[]): Character[] => {
    if(characters.length < 2) {
        throw new Error ("Please invite a friend to come with you! We need at least 2 players in order to recover your life!")
    }
    
    characters.map((char) => {
        if(char.life === 1500) {
            throw new Error("You cannot recover a character that his life is full!")
        }
    })

    characters.forEach((char) => {
        char.life = 1500
    })

    return characters
}

export const increaseCharStrength = (character: Character, newStrength: number): void => {
    if(character.strength >= newStrength){
        throw new Error("You can only increase your strength!")
    }

    if(newStrength > 2000) {
        throw new Error("The strength's limit is 2000!")
    }

    character.strength = newStrength
}

export const decreaseCharDefense = (character: Character, newDefense: number): void => {
    if(character.defense <= newDefense){
        throw new Error("Your shield can only be degrated!")
    }

    if(newDefense < 0) {
        throw new Error("Defense cannot be negative!")
    }

    character.defense = newDefense
}