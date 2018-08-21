//Pseudo Code:
//There are 4 boxes displayed as buttons
//Generate a random number at start of game for player between 19-120

//Player clicks on a button, it will add a specific amount of points to players total (hidden values change for each game)
//The amount is hidden until the crystal is clicked (hidden value between 1-12)
//Player's score is updated after each click
//Player wins if their score matches random number
//Player loses if their score goes over random number
//Game resets after each win/lose
//Page shows wins & losses total


$(document).ready(function() {

    $("#random-button").on("click", function() {
      let random = Math.floor(Math.random() * 101) + 19;
      $(".numberBox").text(random);

    let bug1 = Math.floor(Math.random() * 11) + 1
    let bug2 = Math.floor(Math.random() * 11) + 1
    let bug3 = Math.floor(Math.random() * 11) + 1
    let bug4 = Math.floor(Math.random() * 11) + 1

    let wins = 0;
    let losses = 0;
    let yourScore = "";


    $("#b1").on("click", function() {
      bug1 = Math.floor(Math.random() * 11) + 1;
      $(".scoreBox").text(bug1);
    })

    $("#b2").on("click", function() {
      bug2 = Math.floor(Math.random() * 11) + 1;
      $(".scoreBox").text(bug2);
    })
    
    $("#b3").on("click", function() {
      bug3 = Math.floor(Math.random() * 11) + 1;
      $(".scoreBox").text(bug3);
    })

    $("#b4").on("click", function() {
      bug4 = Math.floor(Math.random() * 11) + 1;
      $(".scoreBox").text(bug4);
    })
    

    });

  });