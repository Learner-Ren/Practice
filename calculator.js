let num = document.querySelectorAll("input");
let art = document.querySelector("select")
var ans = 0;
solve = () =>{
    let num1= num[0].value;
    let num2 = num[1].value;
    if(num1=="" && num2==""){
        num1=0;
        num2=0;
    }else if(num1==""){
        num1=0;
    }else if(num2==0){
        num2=0;
    }
    if(art.value=="plus"){
    ans = parseFloat(num1) + parseFloat(num2);   
}else if(art.value=="minus"){
    ans = num1 - num2
}else if(art.value=="multiplication"){
    ans = num1 * num2
}else if(art.value=="divide"){
    ans = num1 / num2
}else if(art.value=="power"){
    ans = num1 ** num2
}else if(art.value=="minus"){
    ans = num1 - num2
}else if(art.value=="root"){
    let rootnum = 1 / parseInt(num1);
    if(num1==""){
        rootnum = 1 / 2;
    }
    ans = num2 ** rootnum;
}
    document.getElementById("mathans").innerText= ans;
}

reset = () => {
    let option = document.querySelector("#initial");
    option.setAttribute("selected","true");
    num[0].value = "";
    num[1].value ="";
    document.getElementById("mathans").innerText="No Answer Yet";  
}