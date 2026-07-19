const toggle = document.getElementById("toggle");

toggle.addEventListener("change", function () {

    if (toggle.checked) {

        // Yearly
        document.getElementById("arcade-price").textContent = "$90/yr";
        document.getElementById("advanced-price").textContent = "$120/yr";
        document.getElementById("pro-price").textContent = "$150/yr";

        document.getElementById("arcade-free").textContent = "2 months free";
        document.getElementById("advanced-free").textContent = "2 months free";
        document.getElementById("pro-free").textContent = "2 months free";

        document.getElementById("monthly").style.color = "#9699AB";
        document.getElementById("yearly").style.color = "#02295A";

    } else {

        // Monthly
        document.getElementById("arcade-price").textContent = "$9/mo";
        document.getElementById("advanced-price").textContent = "$12/mo";
        document.getElementById("pro-price").textContent = "$15/mo";

        document.getElementById("arcade-free").textContent = "";
        document.getElementById("advanced-free").textContent = "";
        document.getElementById("pro-free").textContent = "";

        document.getElementById("monthly").style.color = "#02295A";
        document.getElementById("yearly").style.color = "#9699AB";

    }

});
const addons = document.querySelectorAll(".addon");

addons.forEach(addon => {

    const check = addon.querySelector("input");

    addon.addEventListener("click", () => {

        check.checked = !check.checked;

        if(check.checked){
            addon.style.border = "1px solid #473DFF";
            addon.style.background = "#F8F9FF";
        }else{
            addon.style.border = "1px solid #D6D9E6";
            addon.style.background = "white";
        }

    });

});
