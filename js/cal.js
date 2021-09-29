
const people_input = document.getElementById("people_input");
const minute_input = document.getElementById("minute_input");
const range_input = document.getElementById("range_input");
const range_text = document.querySelector(".range_text");
const donation = document.getElementById("donation");
const stream = document.getElementById("stream");
const total_estimate = document.getElementById("total_estimate");

const  plan_town     = document.querySelector(".plan_town")
const  plan_city   = document.querySelector(".plan_city")
const  plan_custom   = document.querySelector(".plan_custom")
const  contact_container   = document.querySelector(".contact_container")
const  contact   = document.querySelector(".contact")



let state = {
     people :  350,
     minute :  50 ,
     range  :  50
} 
range_text.innerHTML = range_input.value;
let streamCost = (people, minute)=>{
    if(people < 500){
        return (people * minute)*0.007;
    }else{
        if(people >= 500 ){
            return (people * minute)*0.005;
        }
    }
    
}
let donationCost = (people , range) =>{
    return (people * range);
}

let totalCost = (x,y)=>{
    return x - y;
}

const cal_op = ()=>{
    let sc = streamCost(state.people , state.minute);
    stream.innerHTML = sc;
   
    let dc = donationCost(state.people , state.range);
    donation.innerHTML = dc

    let tc = totalCost(dc, sc)
    total_estimate.innerHTML = tc;
    
}
const change_cart = (people_input)=>{
    if(people_input >= 500 && people_input <= 1000){

        plan_town.classList.add("hide");
        plan_city.classList.remove("hide");
        plan_custom.classList.add("hide")
        contact.classList.add("hide")
        contact_container.classList.add("hide")
    }else if(people_input > 1000){
        plan_town.classList.add("hide");
        plan_city.classList.add("hide");
        plan_custom.classList.remove("hide")
        contact.classList.remove("hide")
        contact_container.classList.remove("hide")
    
    }else{
        plan_town.classList.remove("hide");
        contact.classList.add("hide")
        contact_container.classList.add("hide")
        plan_city.classList.add("hide");
        plan_custom.classList.add("hide")
    }
}
cal_op();
people_input.addEventListener("input", ()=>{
    if(people_input.value != ""){
        parseInt(state.people = people_input.value);
        console.log(state.people);
        console.log(typeof(state.people))
        cal_op()
        change_cart(people_input.value)

    }
})

minute_input.addEventListener("input", ()=>{
    if(minute_input.value != ""){
        parseInt(state.minute = minute_input.value);
        cal_op()

    }
})

const range_bar = document.querySelector(".range_bar");

range_input.addEventListener("input", ()=>{   
    if(range_input.value != ""){   

    let left = range_input.value ;
    
        parseInt(state.range = range_input.value); 
    
        range_bar.style.background = `linear-gradient( 90deg, #00d6d6 ${left}%, rgb(192, 190, 190) ${left}% )`

       

        range_text.innerHTML = range_input.value;
    
        cal_op()

    }
})



