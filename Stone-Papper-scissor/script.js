let win=0;
let lose=0;
let draw=0;
let turns=0;
console.log('connected');
function Auto()
{
    const num=Math.random();
    console.log(num);
    let res='';
    if(num>=0 && num<=1/2)
    {
        res='stone';
    }
    else if(num>1/2 && num<=2/3)
    {
        res='paper';
    }
    else{
        res='scissor';
    }
    return res;
}