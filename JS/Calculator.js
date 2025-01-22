const displayInput = (input)=>{
    let currentInput = document.getElementById("input")    
    currentInput.value += input
}
const calculateAnswer = ()=>{
    let currentInput = document.getElementById("input")
    currentInput.value = eval(currentInput.value);
//     currentInput.innerHTML = eval(console.log("Hello"));
}