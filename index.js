const allowedKeys = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.',
    '+', '-', '*', '/', '%', '^',
    '=', 'C', '√', 'x²'
];

var txt = ""


function btn_click(key) {
    console.log(key + " clicked")
    var a = document.getElementById("txt-out")
    var b = document.getElementById("main-out")
    if (allowedKeys.includes(key)) {
        console.log("Yesss")
        txt += key
        a.innerHTML = txt
    }
    if (key == 'Enter') {
        try {
            console.log(b)
            b.innerHTML = eval(txt)
        }catch(e){
            console.log(e)
            a.innerHTML = "invalid expression"
        }
        txt=""
    }
    if (key == 'Backspace') {
        txt = txt.slice(0, -1)
        a.innerHTML = txt
    }
    if (key == 'clear') {
        txt = " "
        a.innerHTML = txt
        b.innerHTML = txt
    }
}


document.addEventListener('keydown' , function(event){

    console.log(`Key pressed: ${event.key}`);
    btn_click(event.key)
    
})



