const apikey="ba6dc4a5556d3ce4966e6c6b109305db";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const input=document.querySelector('.input');
async function search(city){
   
    const response=await fetch(apiurl +city+ `&appid=${apikey}`);
    const data=await response.json();
  
    console.log(data);

    if(data.cod==='404'){
        document.querySelector('.city').innerHTML='City Not Found';
        document.querySelector('.temp').innerHTML="";

    
    }
    else{
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=data.main.temp + "C";
    }

}
function clicked(){
search(input.value);
}

search(input.value);