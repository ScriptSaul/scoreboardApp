console.log("JavaScript is running")

let homeTitle = document.getElementById("home-Title")
let guestTitle = document.getElementById("guest-Title")

let homeCount = 0
let guestCount = 0
let homeEL = document.getElementById("homeEL")
let guestEL = document.getElementById("guestEL")

function home_1() {
    // Home score increases by 1
    homeCount = homeCount + 1
    homeEL.textContent = homeCount
    checkLeader()
}

function home_2() {
    // Home score increases by 2
    homeCount = homeCount + 2
    homeEL.textContent = homeCount
    checkLeader()
}

function home_3() {
    // Home score increases by 3
    homeCount = homeCount + 3
    homeEL.textContent = homeCount
    checkLeader()
}

function guest_1() {
    // Guest score increases by 1
    guestCount = guestCount + 1
    guestEL.textContent = guestCount
    checkLeader()
}

function guest_2() {
    // Guest score increases by 2
    guestCount = guestCount + 2
    guestEL.textContent = guestCount
    checkLeader()
}

function guest_3() {
    // Guest score increases by 3
    guestCount = guestCount + 3
    guestEL.textContent = guestCount
    checkLeader()
}

function new_game() {
    // Resets the soreboard
    homeCount = 0
    guestCount = 0
    
    homeEL.textContent = homeCount
    guestEL.textContent = guestCount
    
    checkLeader()
}

function checkLeader() {
    // Compares scores here to see who is ahead.
    if (homeCount > guestCount) {
        homeTitle.style.color = "#F94F6D"
        guestTitle.style.color = "#FFFFFF"
    } else if (guestCount > homeCount) {
        guestTitle.style.color = "#F94F6D"
        homeTitle.style.color = "#FFFFFF"
    } else {
        homeTitle.style.color = "#FFFFFF"
        guestTitle.style.color = "#FFFFFF"
    }
}