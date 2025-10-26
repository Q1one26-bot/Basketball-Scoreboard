let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let homeScoreBtnThree = document.getElementById("home-score-btn-3")
let homeScoreEl = document.getElementById("home-score")
let homeScore = 0
let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2")
let guestScoreBtnThree = document.getElementById("guest-score-btn-3")
let guestScoreEl = document.getElementById("guest-score") 
let guestScore = 0
let quarterBtn = document.getElementById("qtr-btn")
let quarterCountEl = document.getElementById("qtr-count")
let quarterCount = 0


function increaseHomeScoreByOne(){
  homeScore += 1
  homeScoreEl.textContent = homeScore
}

function increaseHomeScoreByTwo(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function increaseHomeScoreByThree(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function increaseGuestScoreByOne(){
  guestScore += 1
  guestScoreEl.textContent = guestScore    
}

function increaseGuestScoreByTwo(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreByThree(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function increaseQuarterByOne(){
    quarterCount += 1
    quarterCountEl.textContent = quarterCount
}
