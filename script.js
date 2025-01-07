

const ftrbtn = document.getElementsByClassName("filterbtn")[0];
const filter = document.querySelector(".filter");
var filterFlag = true
function search(){
    console.log("search");
}

function filterToggle(){
    console.log("filter")
    if(filterFlag){
        ftrbtn.style.transform="rotate(90deg)";
        filter.style.right= "0%";
        filterFlag=false;        
    }
    else{
        ftrbtn.style.transform="rotate(0deg)";
        filter.style.right= "-100%";
        filterFlag=true;
    }
}