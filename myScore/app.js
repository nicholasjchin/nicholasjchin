$(document).ready(function () {
  $("#team-select-btn").on("click", function () {
    var selectedOption = $("#team-select").val();
    var teamSelectorForm = $("#team-selector");
    var scoreDisplay = $("#score-display");
    var teamName = "";

    if (selectedOption == "team1") {
      $("body").addClass("blue");
      teamName = "Team 1";
    } else {
      $("body").addClass("red");
      teamName = "Team 2";
    }

    var teamElement = $("<h1>");
    teamElement.text(teamName);
    scoreDisplay.append(teamElement);

    var scoreElement = $("<h2>");
    scoreElement.text(0);
    scoreDisplay.append(scoreElement);

    teamSelectorForm.hide();
  });
});
