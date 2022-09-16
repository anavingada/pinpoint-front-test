const navLinks = ["Who we are", "#LifeatGoCo", "What's in it for yo", "GoFurther Academy", "FAQ",];

const companyInfo = [
    {
        id: 1,
        title: "Join us as we save time and money for people everywhere",
        paragraph: "Since 2006, we've been disrupting the insurance industry to save millions of people masses of money. we're looking for talented, ambitious and friendly faces to help us achieve our mission. We have a wide range of roles across GoCo as we're constantly growing. So, if you've got the skills and passion, we want to hear from you!",
        callToAction: "Who we are",
        image: "assets/images/brands.png"
    },
    {
        id: 2,
        title: "Collaborate, innovate and be proud",
        paragraph: "We want every member of staff to be happy, healthy and successful with us. this is the case whether they're in our office or working from home (which we've all been doing throughout the COVID-19 pandemic). Get ready to be true to yourself, to support your teammates, to think beyond the limits of what's been done before and to give things your best shot. Our staff are at the heart of everything we do, so we'll support you at every step of your GoCo journey.",
        callToAction: "#LifeatGoCo",
        image: "assets/images/team.png"
    },
    {
        id: 3,
        title: "Grow your GoCo career",
        paragraph: "We don't sit still, so neither should you have to. We strive to help our staff further their careers, find enjoyment in what they do and upskill their abilities. If you're interested in embetterment through things like on-the-job degree programmes, mentorship sessions, carrer change schemes and personal development plans, you'll love what we have to offer.",
        callToAction: "Employee journeys",
        image: "assets/images/emma.png"
    }
]

/** Function to toggle the nav in smaller screens. */
function buildHeader() {
    var nav = document.getElementById('nav');
    var links = '';
    nav.innerHTML = '';

    for (var i = 0; i < navLinks.length; i++) {
        links += '<a href="index.html">' + navLinks[i] + '</a>';
    }
    nav.innerHTML += links;

}

function buildMain() {
    var sectionCompany = document.getElementById("company");
    var info = '';
    sectionCompany.innerHTML = '';

    for (var i = 0; i < companyInfo.length; i++) {
        info +=
            '<section>'
            + '<div>'
            + '<h2>' + companyInfo[i].title + '</h2>'
            + '<p class="paragraph">' + companyInfo[i].paragraph + '</p>'
            + '<button onclick="location.href=&apos;index.html&apos;" type="button">'
            + '<p class="btn-call-action">' + companyInfo[i].callToAction + '</p>'
            + '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            + '</button>'
            + '</div>';

        if (companyInfo[i].id == 3) {
            info +=
                '<div class="position-relative ctn-journey">'
                + '<img src="assets/images/emma.png" />'
                + '<div class="position-absolute text-center">'
                + '<p>Follow Emma&apos;s journey to finding her place at  Goco</p>'
                + '<button onclick="location.href=&apos;index.html&apos;" type="button">'
                + '<p class="btn-call-action">Read</p>'
                + '<i class="fa fa-angle-right" aria-hidden="true"></i>'
                + '</button>'
                + '</div>'
                + '</div>';
        } else {
            info += '<div><img src="' + companyInfo[i].image + '" /></div>';
        }

        info += '</section>';
    }

    sectionCompany.innerHTML += info;

}

function toggleNav() {
    var x = document.getElementById("navigation");
    if (x.className === "ctn-navigation") {
        x.className += " responsive";
    } else {
        x.className = "ctn-navigation";
    }
}

(function () {
    buildHeader();
    buildMain();
})();