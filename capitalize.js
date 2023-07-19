function capitalize(string) {
    let firstLetter = string.charAt(0).toUpperCase()
    let remainingWord = string.slice(1)

    console.log(firstLetter + remainingWord)
    return firstLetter + remainingWord
}

module.exports = capitalize