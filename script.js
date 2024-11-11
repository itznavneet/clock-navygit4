

setInterval(()=>{
    let time= new Date();
let h= time.getHours()
let m= time.getMinutes()
let s= time.getSeconds()
let day=  time.toDateString()
    document.querySelector(".h").innerHTML= h
    document.querySelector(".m").innerHTML= m
    document.querySelector(".s").innerHTML= s
    document.querySelector(".date").innerHTML= day

},1000);

