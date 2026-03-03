function changeText() 
{

    document.getElementById("id1").value="Welcome to My Program!";

}

changeText()

function changeUpper() 
{        
    let a=document.getElementById("id1")
    a.value=a.value.toUpperCase()
}

changeUpper()

function changeLower() 
{        
    let a=document.getElementById("id1")
    a.value=a.value.toLowerCase()
}

changeLower()

function changeBG() 
{   
    let r = Math.floor(Math.random() * 256) + 1;
    let g = Math.floor(Math.random() * 256) + 1;
    let b = Math.floor(Math.random() * 256) + 1;
    let rgb1=`rgb(${r},${g},${b})`
    
    let a=document.querySelector("body").style.backgroundColor=rgb1

}

changeBG()


function lock() 
{        
  document.getElementById("id1").value="";
}

lock()



function fontSize(size){
    document.getElementById('id1').style.fontSize=`${size}px`;
}

