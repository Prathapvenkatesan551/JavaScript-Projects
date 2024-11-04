let userInp=document.querySelector('#date');
let res=document.querySelector('.result');
let show=document.querySelector('.show');

userInp.max=new Date().toISOString().split("T")[0];

res.addEventListener("click",()=>{
    let dd=userInp.value;
    console.log(dd);
    show.innerHTML=`<p>${calculateAge(dd)}</p>` ;
})
function calculateAge(dob) {
    
    const birthDate = new Date(dob);
    const today = new Date();

    
    let age = today.getFullYear() - birthDate.getFullYear();

   
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    return age;
}