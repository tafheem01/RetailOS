const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target){

            counter.innerText = Math.ceil(current + increment);

            setTimeout(updateCounter,20);

        }else{

            if(target >= 1000000){

                counter.innerText = "1M+";

            }

            else if(target >= 1000){

                counter.innerText = (target/1000)+"K+";

            }

            else{

                counter.innerText = target+"+";

            }

        }

    };

    updateCounter();

});