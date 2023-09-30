  // var a = document.querySelector("h1")
// console.log("a")

// var a = document.querySelector("h1")
// a.innerHTML = "kesy ho bhai"


// var a = document.querySelector("h1")
// a.innerHTML = "bhai kya hal hy"




// var a = document.querySelector("h1")
// a.style.color = "green"
// a.style.textAlign = "center"
// a.style.backgroundColor = "yellow"


// var a = document.querySelector("h1")
// a.style.cursor = "pointer"
// a.style.color =  "yellow"
// a.style.backgroundColor = "green"
// a.style.textAlign = "center"
// a.addEventListener("click" , function(){
//     document.write("<b>shahbaz</b>")
// })

var a = document.querySelector("#bulb")
var btn = document.querySelector("button")
var luna =0
btn.addEventListener ("click" , function(){
    bulb.style.backgroundColor = "yellow"
    if(luna==0){
        luna = 1
        bulb.style.backgroundColor = "yellow"
       
    }
    else{
        luna = 0
        bulb.style.backgroundColor = "transparent"
        
    }
    
})
