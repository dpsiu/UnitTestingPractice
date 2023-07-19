function caesarCipher(str) {
    let characters = str.split('')

    let cipheredChars = characters.map((char) => {
        if (/[a-zA-Z]/.test(char)) {
            const charCode = char.charCodeAt(0)
            let shiftedCharCode = charCode + 1

            if ((charCode === 90) || (charCode === 122)){
                shiftedCharCode -= 26
            }

            return String.fromCharCode(shiftedCharCode)
        }

        return char;
    })

    let cipheredStr = cipheredChars.join('')

    return cipheredStr
}
    // split string into array
    // for all characters in string, if found in alphabet
    //  that char = alphabet i+1. Ex, let word = "Apple" (toLowerCase?)
    // word.split = 
    // if "a" found in alphabet, make word[i] = alphabet[i+1]

module.exports = caesarCipher