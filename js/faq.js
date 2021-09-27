const faq = document.querySelectorAll(".question");


const removes = (element, cls) =>{
    element.classList.remove(`${cls}`)
}
const adds = (element, cls) =>{
    element.classList.add(`${cls}`)
}


let pre_icon = null;
faq.forEach((icon, i) => {

    const icon_plus = icon.querySelector(".icon_plus");
    const icon_minus = icon.querySelector(".icon_minus");
    
    icon.addEventListener("click", () => {
        if (pre_icon != null) {
            const pre_icon_minus = pre_icon.querySelector(".icon_minus");
            const pre_icon_plus = pre_icon.querySelector(".icon_plus");

            if (pre_icon == icon) {
                removes(icon_minus,"show");
                removes(icon_plus,"hide");

                pre_icon = null;

            } else {
                removes(pre_icon_minus,"show");
                removes(pre_icon_plus,"hide");
                
                adds(icon_minus,"show");
                adds(icon_plus,"hide");                

                pre_icon = icon;
            }

        } else {

            if (icon_minus.classList.contains("show")) {
                removes(icon_minus,"show");
                removes(icon_plus,"hide");
            } else {
                adds(icon_minus,"show");
                adds(icon_plus,"hide");                
            }
            pre_icon = icon;
        };
    });
});