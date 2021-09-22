const prompt = require('prompt-sync')()

const conDecon = prompt("Do you want to Construct a color or Deconstruct a color: ")

if(conDecon === "construct") {

    const twoColors = prompt("Please pick a color combination (red + blue, red + yellow, blue + yellow): ")

    if(twoColors === "red + blue") {
        console.log("You constructed the color Purple")
    }
    else if(twoColors === "red + yellow") {
        console.log("You constructed the color Orange")
    }
    else if(twoColors === "blue + yellow") {
        console.log("You constructed the color Green")
    }
    else {
        console.log("Error!")
    }

}

if(conDecon === "deconstruct") {

    const oneColor = prompt("Please pick a color (Purple, Orange, Green): ")

    if(oneColor === "purple") {
        console.log("You deconstructed the color Purple into red + blue")
    }
    else if(oneColor === "orange") {
        console.log("You deconstructed the color orange into red + yellow")
    }
    else if(oneColor === "green") {
        console.log("You deconstructed the color green into blue + yellow")
    }
    else {
        console.log("Error!")
    }

}