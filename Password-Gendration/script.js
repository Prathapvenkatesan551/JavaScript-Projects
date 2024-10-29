const element=document.querySelector('.input');

const uppercase="QWERTYUIOPASDFGHJKLZXCVBNM";
const lowercase="qwertyuiopasdfghjklzxcvbnm";
const symbol="!@#$%^&*()_+=-[]\/><,.";
const numbers="1234567890";
const len=12;
let result="";
function generate(){
    result="";
while(result.length<12)
{
    result+=uppercase[Math.floor(Math.random()*uppercase.length)];
    result+=lowercase[Math.floor(Math.random()*lowercase.length)];
    result+=numbers[Math.floor(Math.random()*numbers.length)];
    result+=symbol[Math.floor(Math.random()*symbol.length)];
}

element.value=result;
}

function copy(){
    copyText(result);
    element.value="";
}

function copyText(result) {
    navigator.clipboard.writeText(result).catch((err) => {
        console.error("Failed to copy text: ", err);
    });
}
