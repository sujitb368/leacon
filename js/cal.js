
const people_input = document.getElementById("people_input");
const minute_input = document.getElementById("minute_input");
const range_input = document.getElementById("range_input");
const range_text = document.querySelector(".range_text");
const donation = document.getElementById("donation");
const stream = document.getElementById("stream");
const total_estimate = document.getElementById("total_estimate");

let people = 1;
let minute ;
let range ;
let streamCost = (people, minute)=>{
    return (people * minute)*0.005;
}
let donationCost = (people , range) =>{
    return (people * range);
}


let totalCost = (x,y)=>{
    return x - y;
}


people_input.addEventListener("input", ()=>{
    return Number(people = people_input.value);

})

minute_input.addEventListener("input", ()=>{
   
    return Number( minute = minute_input.value);
})
range_input.addEventListener("input", ()=>{
    
    range_text.innerHTML = range_input.value;
    return Number(range =  range_input.value);
})
const cal_op = ()=>{
    let sc = streamCost(people,minute);
    stream.innerHTML = sc;
   
    let dc = donationCost(people,range);
    donation.innerHTML = dc

    let tc = totalCost(dc, sc)
    total_estimate.innerHTML = tc;
    
}

people_input.addEventListener("input", function(){
    
    if(range != undefined){
        cal_op();
    }
    
    
})
minute_input.addEventListener("input", function(){
    
    if(range != undefined){
        cal_op();
    }
})
range_input.addEventListener("input", function(){
    
    if(range != undefined){
        cal_op();
    }
})
