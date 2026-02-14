/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const txtFieldEl = document.getElementById("txtF")
let cBtnEl = document.getElementById("conv_btn")
const lengthEl=document.getElementById("length")
const volumeEl=document.getElementById("volume")
const massEl=document.getElementById("mass")

function convert(input){
    
    //set variables for different measurements
    //meters and feet
    let feet=(input*3.281).toFixed(2) 
    let mtr=(input*0.3048).toFixed(2)
    
    //litres and gallons
    let lt=(input*0.264).toFixed(2)
    let gal=(input*3.785).toFixed(2)
    
    //kg and pounds
    let kg=(input*2.204).toFixed(2)
    let pnd=(input*0.454).toFixed(2)
    
    //meter feet conversion
    lengthEl.innerHTML=`<span>${input} meters = ${feet} feet | ${input} feet = ${mtr} meters</span>`
    
    //litres gallon conversion
    volumeEl.innerHTML=`<span>${input} litres = ${gal} gallons | ${input} gallons = ${lt} litres</span>`
    
    //kg and pounds conversion
    massEl.innerHTML=`<span>${input} kilos = ${pnd} pounds | ${input} pounds = ${kg} kilos</span>`
}
  
cBtnEl.addEventListener("click", function(){
    convert(txtFieldEl.value)
})
