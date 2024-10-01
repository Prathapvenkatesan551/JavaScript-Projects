function ifclick(){
    const buttonElement=document.getElementById('button');
    const paraElement=document.getElementById('para');
    if(buttonElement.innerText==='Follow'){
        buttonElement.innerHTML='Followed';
        buttonElement.classList.add('color');
        paraElement.innerHTML='You are following the person . Click to Unfollow'
    }
    else{
        buttonElement.innerHTML='Follow';
        buttonElement.classList.remove('color');
        paraElement.innerHTML='Click the follow button to follow the person';
    }
}