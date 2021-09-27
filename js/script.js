
let faqs = gsap.utils.toArray(".faqs")
let question = gsap.utils.toArray(".question")
let ans = gsap.utils.toArray(".ans")

const animations = [];

faqs.forEach(e => creatAnimation(e));

question.forEach(que => {
    que.addEventListener("click", () => {
        toggleAnimation(que);
    });

});
function toggleAnimation(question) {
    // Save the current state of the clicked animation
    const question_status = question.animation.reversed();
    // Reverse all animations
    animations.forEach(animation => animation.reverse());
    // Set the reversed state of the clicked accordion element to the opposite of what it was before
    question.animation.reversed(!question_status);
}

function creatAnimation(e) {
    const question = e.querySelector(".question");
    const answer = e.querySelector(".ans");
    // gsap.set(answer, {height:"auto"});

    // const tween = gsap.fromTo(answer, {
    //         height: 0,           
    //     },
    //     {
    //         height: "auto",
    //         duration: 0.2,
    //         ease: "power1.inOut",

    //     });

    gsap.set(answer, { height: "auto" });

    const tween = gsap.from(answer, {
        height: 0,
        duration: 0.5,
        ease: "power1.inOut",
        reversed: true
    });


    question.animation = tween;

    animations.push(tween);
}





