//Pseudo Code:
//There are 4 boxes displayed as buttons
//Generate a random number at start of game for player between 19-120

//Player clicks on a button, it will add a specific amount of points to players total (hidden values change for each game)
//The amount is hidden until the bug is clicked (hidden value between 1-12)
//Player's score is updated after each click
//Player wins if their score matches random number
//Player loses if their score goes over random number
//Game resets after each win/lose
//Page shows wins & losses total


$(document).ready(function() {

//Generate random number
    $("#random-button").one("click", function() {
      let random = Math.floor(Math.random() * 101) + 19;
      $(".numberBox").text(random);

//Global Variables
    let bug1 = Math.floor(Math.random() * 11) + 1
    let bug2 = Math.floor(Math.random() * 11) + 1
    let bug3 = Math.floor(Math.random() * 11) + 1
    let bug4 = Math.floor(Math.random() * 11) + 1

    let wins = 0;
    let losses = 0;
    let yourScore = 0;

//Generate random number for each button on click
    $("#b1").on("click", function() {
      yourScore = yourScore + bug1
      $(".scoreBox").text(yourScore);
    })

    $("#b2").on("click", function() {
      yourScore = yourScore + bug2
      $(".scoreBox").text(yourScore);
    })
    
    $("#b3").on("click", function() {
      yourScore = yourScore + bug3
      $(".scoreBox").text(yourScore);
    })

    $("#b4").on("click", function() {
      yourScore = yourScore + bug4
      $(".scoreBox").text(yourScore);
    })
    

    });

  });