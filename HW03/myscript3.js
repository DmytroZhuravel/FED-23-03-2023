let day = prompt("Please enter day of the week ");

switch (day) {
  case "tuesday":
  case "thursday":
    console.log("Today You have lesson");
    break;
  default:
    console.log("Today You have day off");
    break;
}