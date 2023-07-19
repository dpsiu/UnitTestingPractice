let object = {
    average: 0,
    min: null,
    max: null,
    length: null
}

function analyzeArray(array) {
    // Obj avg
    for(let i = 0; i <= array.length - 1; i++){
        object.average += array[i]
    }
    object.average = Math.floor(object.average/array.length)

    // Obj min
    let min = array[0]
    for(let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        }
        object.min = min
    }

    // Obj min
    let max = array[0]
    for(let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
        object.max = max
    }
    object.length = array.length
    console.log(object)
    return object
}
analyzeArray([1,8,3,4,2,6])
// analyzeArray([76, 2, 54, 12, 3])
module.exports = analyzeArray