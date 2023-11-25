 var con=document.querySelector("#container")
 var love=document.querySelector("i")
 con.addEventListener("dblclick",function(){
   love.style.transform="translate(-50%,-50%)  scale(1)"
   love.style.opacity=0.8;
   setTimeout(function(){
    love.style.opacity=0
},1000)
 

   setTimeout(function(){
    love.style.transform="translate(-50%,-50%)  scale(0)"},2000)
 })
 
 
// console.log("hello")

//  2000 means it is in mili second and print the value in 2 miliseconds
// set time out ra kama jetiki time daba setiki derire sia print haba