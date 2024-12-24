

let elem=document.createElement("h3");
let elem1=document.createElement("h3");
let elem3=document.createElement("button");

let tudolist=[];
function update()
{
    let  inp=document.getElementById("inp");
    let  inp1=document.getElementById("inp1");
    let item=inp.value;
    let item1=inp1.value;
   
    
    
     // tudolist=[];
     tudolist.push({item,item1});  
     console.log(tudolist);
     
       displa();  
        
    
}

function displa()
{
    let para=document.querySelector(".tudoitem");
         let newHtml=' '; 
  
    for(let i=0;i<tudolist.length;i++)
        {
            let {item,item1}=tudolist[i];
            console.log(item1);
            
            newHtml+=` 
            
            <span> ${item}</span>
            <span> ${item1}</span>
            <button class="btn1"  onclick="tudolist.splice(${i},1) ; 
            displa();  ">Delete</button>
            
            `;
        }
            para.innerHTML= newHtml;
        
}
