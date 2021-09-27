


const btn_toggle = document.querySelectorAll(".btn_toggle");
const monthly = document.querySelectorAll(".monthly");
const yearly = document.querySelectorAll(".yearly");

const toggle_price = document.querySelectorAll(".toggle_price");


btn_toggle.forEach(el => el.addEventListener("change", function () {
    toggle_price.forEach((changePrice) => {
        if (changePrice.checked == true) {
            if (changePrice.classList.contains("show1")) {
                changePrice.classList.remove("show1");
                changePrice.classList.add("hide");
            }
            else if (changePrice.classList.contains("hide")) {
                changePrice.classList.remove("hide");
                changePrice.classList.add("show1");
            }
        } else {
            if (changePrice.classList.contains("hide")) {
                changePrice.classList.remove("hide");
                changePrice.classList.add("show1");
            } else if (changePrice.classList.contains("show1")) {
                changePrice.classList.remove("show1");
                changePrice.classList.add("hide");
            }
        }
    })
}))

// listening to toggle check or uncheck
btn_toggle.forEach((btn) => {
    btn.addEventListener("change", function () {
        if (btn.checked == true) {
            btn_toggle.forEach((e) => {
                e.checked = true;
                yearly.forEach(
                    (el) => {
                        el.classList.add("yearly_color")

                    }
                )

            })
        } else {
            btn_toggle.forEach((e) => {
                e.checked = false;
                yearly.forEach(
                    (el) => {
                        el.classList.remove("yearly_color")

                    }
                )

            })
        }


    });

});


