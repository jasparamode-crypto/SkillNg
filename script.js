const personalForm = document.getElementById("personal-form");

if (personalForm) {

    personalForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("phone", phone);

        window.location.href = "plan.html";

    });

}


const plans = document.querySelectorAll(".plan");
const billingToggle = document.getElementById("billing-toggle");

let selectedPlan =
    localStorage.getItem("plan") || "Arcade";

let billing =
    localStorage.getItem("billing") || "Monthly";


if (plans.length > 0) {

    plans.forEach(function(plan) {

        if (plan.dataset.plan === selectedPlan) {
            plan.classList.add("selected");
        }

        plan.addEventListener("click", function() {

            plans.forEach(function(item) {
                item.classList.remove("selected");
            });

            plan.classList.add("selected");

            selectedPlan = plan.dataset.plan;

            localStorage.setItem(
                "plan",
                selectedPlan
            );

        });

    });

}


if (billingToggle) {

    if (billing === "Yearly") {
        billingToggle.checked = true;
    }

    billingToggle.addEventListener("change", function() {

        if (billingToggle.checked) {

            billing = "Yearly";

        } else {

            billing = "Monthly";

        }

        localStorage.setItem(
            "billing",
            billing
        );

        updateBilling();

    });

    updateBilling();

}


function updateBilling() {

    const monthlyPrices =
        document.querySelectorAll(".monthly-price");

    const yearlyPrices =
        document.querySelectorAll(".yearly-price");

    const freeTexts =
        document.querySelectorAll(".free");


    if (billing === "Yearly") {

        monthlyPrices.forEach(function(price) {
            price.style.display = "none";
        });

        yearlyPrices.forEach(function(price) {
            price.style.display = "block";
        });

        freeTexts.forEach(function(text) {
            text.style.display = "block";
        });

    } else {

        monthlyPrices.forEach(function(price) {
            price.style.display = "block";
        });

        yearlyPrices.forEach(function(price) {
            price.style.display = "none";
        });

        freeTexts.forEach(function(text) {
            text.style.display = "none";
        });

    }

}


const planNext =
    document.getElementById("plan-next");


if (planNext) {

    planNext.addEventListener("click", function() {

        if (!localStorage.getItem("plan")) {

            localStorage.setItem(
                "plan",
                "Arcade"
            );

        }

        window.location.href = "step3.html";

    });

}


const addonsNext =
    document.getElementById("addons-next");


if (addonsNext) {

    const online =
        document.getElementById("online");

    const storage =
        document.getElementById("storage");

    const profile =
        document.getElementById("profile");


    online.checked =
        localStorage.getItem("online") === "true";

    storage.checked =
        localStorage.getItem("storage") === "true";

    profile.checked =
        localStorage.getItem("profile") === "true";


    addonsNext.addEventListener("click", function() {

        localStorage.setItem(
            "online",
            online.checked
        );

        localStorage.setItem(
            "storage",
            storage.checked
        );

        localStorage.setItem(
            "profile",
            profile.checked
        );

        window.location.href =
            "summary.html";

    });

}


const summaryPlan =
    document.getElementById("summary-plan");


if (summaryPlan) {

    const plan =
        localStorage.getItem("plan") || "Arcade";

    const billing =
        localStorage.getItem("billing") || "Monthly";


    const online =
        localStorage.getItem("online") === "true";

    const storage =
        localStorage.getItem("storage") === "true";

    const profile =
        localStorage.getItem("profile") === "true";


    let planPrice;

    if (billing === "Yearly") {

        if (plan === "Arcade") {
            planPrice = 90;
        }

        if (plan === "Advanced") {
            planPrice = 120;
        }

        if (plan === "Pro") {
            planPrice = 150;
        }

    } else {

        if (plan === "Arcade") {
            planPrice = 9;
        }

        if (plan === "Advanced") {
            planPrice = 12;
        }

        if (plan === "Pro") {
            planPrice = 15;
        }

    }


    let total = planPrice;


    summaryPlan.textContent =
        `${plan} (${billing})`;


    const summaryPlanPrice =
        document.getElementById(
            "summary-plan-price"
        );


    if (billing === "Yearly") {

        summaryPlanPrice.textContent =
            `$${planPrice}/yr`;

    } else {

        summaryPlanPrice.textContent =
            `$${planPrice}/mo`;

    }


    const summaryAddons =
        document.getElementById(
            "summary-addons"
        );


    summaryAddons.innerHTML = "";


    if (online) {

        total += billing === "Yearly" ? 10 : 1;

        summaryAddons.innerHTML += `
            <div class="summary-addon">
                <span>Online service</span>
                <span>
                    +$${billing === "Yearly" ? 10 : 1}/${billing === "Yearly" ? "yr" : "mo"}
                </span>
            </div>
        `;

    }


    if (storage) {

        total += billing === "Yearly" ? 20 : 2;

        summaryAddons.innerHTML += `
            <div class="summary-addon">
                <span>Larger storage</span>
                <span>
                    +$${billing === "Yearly" ? 20 : 2}/${billing === "Yearly" ? "yr" : "mo"}
                </span>
            </div>
        `;

    }


    if (profile) {

        total += billing === "Yearly" ? 20 : 2;

        summaryAddons.innerHTML += `
            <div class="summary-addon">
                <span>Customizable profile</span>
                <span>
                    +$${billing === "Yearly" ? 20 : 2}/${billing === "Yearly" ? "yr" : "mo"}
                </span>
            </div>
        `;

    }


    const totalPrice =
        document.getElementById(
            "total-price"
        );


    if (billing === "Yearly") {

        totalPrice.textContent =
            `+$${total}/yr`;

        document.getElementById(
            "total-label"
        ).textContent =
            "Total (per year)";

    } else {

        totalPrice.textContent =
            `+$${total}/mo`;

        document.getElementById(
            "total-label"
        ).textContent =
            "Total (per month)";

    }

}