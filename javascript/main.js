window.onload = function () {
  document.title = "Phone Number Check | Pyrushh";
};

const loader = document.querySelector(".loader");
const result = document.getElementById("result");
const checkButton = document.getElementById("check-button");
const numberInput = document.getElementById("number-input");
const paste = document.getElementById("paste");

// pressing the paste button pasted from your clipboard
paste.addEventListener("click", async () => {
  const Number = await navigator.clipboard.readText();
  numberInput.value = Number;
  console.log(Number);
});

window.addEventListener("load", () => {
  numberInput.focus();
});

// Checks the entered number for validity when the user hits the Enter key.
numberInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    checkNumber();
  }
});

checkButton.addEventListener("click", checkNumber); // Calls the checkNumber() function.

// Defines the checkNumber() function to check the entered number for validity.
function checkNumber() {
  // Displays the loading animation.
  loader.style.display = "block";
  const userInput = numberInput.value;

  let simCard = "";
  let message = "";

  if (userInput.length < 3) {
    message = "Incomplete phone number. Please put atleast 3 digits";
  } else {
    // Checks the first three digits of the number.
    const firstThreeDigits = userInput.substring(0, 3);

    switch (firstThreeDigits) {
      case "984":
      case "985":
      case "976":
      case "986":
        simCard = "NTC";
        break;
      case "975":
      case "974":
        simCard = "Sky SIM";
        break;
      case "980":
      case "981":
      case "970":
      case "982":
        simCard = "Ncell";
        break;
      case "988":
      case "962":
      case "961":
        simCard = "Smart Cell";
        break;
      case "972":
        simCard = "UTL";
        break;
      case "963":
        simCard = "Nepal Satellite Telecom";
        break;
      default:
        message = "The number is invalid";
    }
  }

  // Display the result.
  setTimeout(() => {
    if (message) {
      result.innerText = message;
    } else {
      result.innerText = `Your Number is ${simCard}`;
    }
    result.style.opacity = 1;
    loader.style.display = "none";
  }, 1000);
}
