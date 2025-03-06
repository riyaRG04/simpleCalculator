const display=document.getElementById('display');

function insertvalue(value){
    display.value +=value;
}

function cleardisplay(){
    display.value='';
}


// function calculate(){
//     try{
//         const result=new Function('return '+display.value)();
//         display.value=result;
//     }
//     catch(error){
//         alert("Invalid Expression");
//         cleardisplay();
//     }
// }

function deletevalue(){
    const str=display.value.slice(0,-1); //helps eliminate the character from back
    display.value=str;
}
function calculate() {
    try {
        const result = math.evaluate(display.value); // safer and more reliable
        display.value = result;
    } catch (error) {
        alert('Invalid Expression');
        cleardisplay();
    }
}
