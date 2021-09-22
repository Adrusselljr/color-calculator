const prompt = require('prompt-sync')()

const conDecon = prompt("Please choose a single color (purple, orange, green) OR please choose a color comination (red blue, red yellow, blue yellow): ")

if(conDecon === "purple" || conDecon === "orange" || conDecon === "green") {

    oneColor()

}

if(conDecon === "red blue" || conDecon === "red yellow" || conDecon === "blue yellow") {

    twoColor()

}

function oneColor() {

    if(conDecon === "purple") {
        console.log("You deconstructed the color Purple into red + blue")
    }
    else if(conDecon === "orange") {
        console.log("You deconstructed the color orange into red + yellow")
    }
    else if(conDecon === "green") {
        console.log("You deconstructed the color green into blue + yellow")
    }
    else {
        console.log("Error!")
    }

}

function twoColor() {

    if(conDecon === "red blue") {
        console.log("You constructed the color Purple")
    }
    else if(conDecon === "red yellow") {
        console.log("You constructed the color Orange")
    }
    else if(conDecon === "blue yellow") {
        console.log("You constructed the color Green")
    }
    else {
        console.log("Error!")
    }

}