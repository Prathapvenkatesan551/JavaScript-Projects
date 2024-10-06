const questions=[
    {
        question:"Which is even number ?",
        answer:[
            { text : 2,correct : true},
            { text : 1,correct : false},
            { text : 5,correct : false},
            { text : 7,correct : false},
            
        ]
    },
    
    {
        question:"Which is odd number ?",
        answer:[
            { text : 2,correct : false},
            { text : 4,correct : false},
            { text : 5,correct : true},
            { text : 16,correct : false},
            
        ]
    },
    {
        question:"Which is odd number ?",
        answer:[
            { text : 2,correct : false},
            { text : 4,correct : false},
            { text : 5,correct : true},
            { text : 16,correct : false},
            
        ]
    },
    {
        question:"Which is odd number ?",
        answer:[
            { text : 2,correct : false},
            { text : 4,correct : false},
            { text : 5,correct : true},
            { text : 16,correct : false},
            
        ]
    }
]

const questionEle=document.querySelector('.question');
const anssectionEle=document.querySelector('.ans-section');
const nextEle=document.querySelector('.next');

let currentIndex=0;
let score=0;

function startQuiz(){
    currentIndex=0;
    score=0;
    nextEle.innerHTML="Next";
   
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentIndex];
    let qn=currentIndex+1;
    questionEle.innerHTML= qn +" . "+currentQuestion.question;

    currentQuestion.answer.forEach(answer =>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        anssectionEle.appendChild(button);
        if(answer.correct)
        {
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",checkanswer);
    });

    
}

function resetState(){
    nextEle.style.display ="none";
    while(anssectionEle.firstChild){
        anssectionEle.removeChild(anssectionEle.firstChild);

    }
}

function checkanswer(e){
    const selectedbtn=e.target;
   const iscorrect=selectedbtn.dataset.correct === "true";
    if(iscorrect){  
        score+=1;
        selectedbtn.classList.add("correct");
       
    }
    else{
        selectedbtn.classList.add("Incorrect");
    }
    Array.from(anssectionEle.children).forEach(butt=>{
        butt.disabled =true;
    })
    nextEle.style.display="block";
    
}

nextEle.addEventListener("click",function nextFun(){
    if(currentIndex<questions.length){

        currentIndex+=1;
        if(currentIndex<questions.length){
            showQuestion();
        }
        else{
            const cont=document.querySelector('.content');
            alert(`you completed press ok to restart/n your score was ${score}`);
            startQuiz();
        }
    }
    else{
        startQuiz();
    }
   
}); 
startQuiz();
