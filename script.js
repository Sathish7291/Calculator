let result = document.getElementById("result");

function getvalue(num){
    result.value += num;
}

function Calculate(){
    try {
        result.value = eval(result.value);
    } catch (error) {
        alert("Invalid Input")
    }
}
function Clear(){
    result.value = "";
}
function del(){
    result.value = result.value.slice(0 , -1);
}
