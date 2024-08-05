let list=[];
const box=document.querySelector('.input');


function addList()
{
    let res='';
    const boxValue=box.value;
    list.push(boxValue);
    for(let i=0;i<list.length;i++)
    {
           res+=`<p>${list[i]} <button onclick="
           list.splice(${i},1);
          view();
           ">Delete</button></p>`;
    }
    
    const ptag=document.querySelector('.para');
    ptag.innerHTML=res;
    }
    function view()
    {
       let viw='';
       for(let j=0;j<list.length;j++)
        {
               viw+=`<p>${list[j]}<button onclick="
               list.splice(${j},1);
              view();
               ">Delete</button></p>`;
        }
        const ptag=document.querySelector('.para');
        ptag.innerHTML=viw;

    }