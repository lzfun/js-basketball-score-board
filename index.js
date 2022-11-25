let home_score = 0
let guest_score = 0

let home_score_el = document.getElementById("home-score")
let guest_score_el = document.getElementById("guest-score")

home_score_el.textContent = home_score
guest_score_el.textContent = guest_score


function addOneHome() {
    home_score += 1
    home_score_el.textContent = home_score
}

function addTwoHome() {
    home_score += 2
    home_score_el.textContent = home_score
}

function addThreeHome() {
    home_score += 3
    home_score_el.textContent = home_score
}

function addOneGuest() {
    guest_score += 1
    guest_score_el.textContent = guest_score
}

function addTwoGuest() {
    guest_score += 2
    guest_score_el.textContent = guest_score
}

function addThreeGuest() {
    guest_score += 3
    guest_score_el.textContent = guest_score
}

function newGame() {
    home_score = 0
    guest_score = 0
    home_score_el.textContent = home_score
    guest_score_el.textContent = guest_score
}