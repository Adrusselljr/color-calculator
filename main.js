const prompt = require('prompt-sync')()

const conDecon = prompt("Do you want to Construct a color or Deconstruct a color: ")

if(conDecon === "construct") {

    twoColors()

}

if(conDecon === "deconstruct") {

    oneColor()

}

function twoColors() {

    const twoColors1 = prompt("Please pick your first color (red, yellow, blue): ")
    const twoColors2 = prompt("Please pick your second color (red, yellow, blue): ")

    if(twoColors1 === "red" && twoColors2 === "blue" || twoColors1 === "blue" && twoColors2 === "red") {
        console.log("You constructed the color Purple")
    }
    else if(twoColors1 === "red" && twoColors2 === "yellow" || twoColors1 === "yellow" && twoColors2 === "red") {
        console.log("You constructed the color Orange")
    }
    else if(twoColors1 === "blue" && twoColors2 === "yellow" || twoColors1 === "yellow" && twoColors2 === "blue") {
        console.log("You constructed the color Green")
    }
    else {
        console.log("Error!")
    }

}

function oneColor() {

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