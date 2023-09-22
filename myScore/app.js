$(document).ready(function () {
  $("div").on("click", "div", function () {
    if (this.className == "left" || this.className == "right") {
      var score = parseInt($(".score")[0].innerText);

      if (this.className == "left") {
        if (score !== 0) {
          score = score - 1;
        }
        console.log(score);
      } else if (this.className == "right") {
        score++;
      }
      $(".score")[0].innerText = score;
    }
  });

  $(".team-header").on("click", function () {
    if ($(".score")[0].innerText) {
      $(".score")[0].innerText = 0;
    }
  });

  $("#team-select-btn").on("click", function () {
    var selectedOption = $("#team-select").val();
    var teamSelectorForm = $("#team-selector");
    var scoreDisplay = $("#score-display");
    var scoreHeader = $(".team-header");
    var teamName = "";

    if (selectedOption == "team1") {
      $("body").addClass("blue");
      teamName = "Team 1";
    } else {
      $("body").addClass("red");
      teamName = "Team 2";
    }

    var div1 = $("<div>");
    var leftElement = $("<h2>");
    div1.addClass("left");
    div1.append(leftElement);

    var teamElement = $("<h1>");
    teamElement.text(teamName);
    scoreHeader.append(teamElement);

    var div2 = $("<div>");
    var scoreElement = $("<h2>");
    scoreElement.addClass("score");
    scoreElement.text(0);
    div2.append(scoreElement);

    var div3 = $("<div>");
    var rightElement = $("<h2>");
    div3.addClass("right");
    div3.append(rightElement);

    scoreDisplay.append(div1);
    scoreDisplay.append(div2);
    scoreDisplay.append(div3);

    teamSelectorForm.hide();
  });
});
