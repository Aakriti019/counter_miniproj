let count=0
let countEl= document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment(){
    count += 1
    console.log(count)
    countEl.innerText = count
}

function reset(){
    count = 0
    console.log(count)
    countEl.innerText = count
}

function save(){
    let countStr =" "+ count + " -"
    console.log(count)
    saveEl.innerText += countStr
}

function startOver(){
    count = 0
    console.log(count)
    countEl.innerText= count
    saveEl.innerText ="Previous entries: "
}