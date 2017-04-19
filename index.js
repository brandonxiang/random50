var less = 0
var more = 0
var range = 100000
var i 
for (i =0 ;i<range;i++){
    var num = Math.random()
    if(num<0.5){
        less ++
    }else{
        more ++
    }
}

console.log("less than 0.5 ", less/range)
console.log("more than 0.5 ", more/range)



