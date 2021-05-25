let wrapacoomds01 = document.querySelector('.wrapacoomds01 .accomodations01');
let a = document.querySelectorAll('.wrapacoomds01 .accomodations01 ul li a');
let seachfrms01 = document.querySelectorAll('.seachfrms01');

// abcs01(e.target.dataset.target)


wrapacoomds01.addEventListener("click", function(e) {
    console.log(e.target.dataset.target)
    let id  = e.target.dataset.target;
    if(id) {
        a.forEach(tabs => {
            tabs.classList.remove("active");
            e.target.classList.add("active");
        })

        seachfrms01.forEach(tabs => {
            tabs.classList.remove("active");
        })

        let findids01 = document.getElementById(id);
        findids01.classList.add("active");
    }
})