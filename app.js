const OTPinputs = document.querySelectorAll("input");
const button = document.querySelector("button");

window.addEventListener("load", () => OTPinputs[0].focus());

function areAllInputsFilled() {
  for (const input of OTPinputs) {
    if (input.value === "") {
      return false;
    }
  }
  return true;
}

function redirectToDifferentPage() {
  const enteredOTP =
    OTPinputs[0].value +
    OTPinputs[1].value +
    OTPinputs[2].value +
    OTPinputs[3].value;

  switch (enteredOTP) {
    case "0210": 
      window.location.href = "https://photos.app.goo.gl/6JoV1junwDNohWSd9";
      // Pramod in Lonavala
      break;
    case "0601":
      window.location.href = "https://photos.app.goo.gl/cPozxVY3L5uhZXDV7"
      // Achan taking photo during marriage
      break;
    case "2809":
      window.location.href = "https://photos.app.goo.gl/YSNFRGZQBVxubthi7";
      // Getting delivery of my bike
      break;
    case "2410":
      window.location.href = "https://photos.app.goo.gl/2pSoV97814VEMAtD8"
      // Pramod at the Bengaluru airport
      break;
    case "2906":
      window.location.href = "https://photos.app.goo.gl/7oQ3AU8gxf3n7jKJA"
      // Pramod trying out formal attire
      break;
    case "1106":
      window.location.href = "https://photos.app.goo.gl/dd2hvikZx7orK4ei9"
      // Achacha wearing my glasses
      break;
    case "0706":
      window.location.href = "https://photos.app.goo.gl/yiedrDFavADd8Zrg9"
      // Achamma sleeping 1
      break;
    case "0206":
      window.location.href = "https://photos.app.goo.gl/dHFBxf8yBNBZThKg9"
      // Achamma sleeping 2
      break;
    case "0106":
      window.location.href = "https://photos.app.goo.gl/VGoqf4PHsgvCG13k7"
      // Achan wearing Rajasthani turban 
      break;
    case "2504":
      window.location.href = "https://photos.app.goo.gl/K3kbSxJeEVr9ajgp6"
      // Me in formals in Jindal
      break;
    default:
      window.location.href = "./broken.html";
  }
}

button.addEventListener("click", () => {
  if (areAllInputsFilled()) {
    redirectToDifferentPage();
  } else {
    alert("Please fill in all OTP inputs");
  }
});

OTPinputs.forEach((input) => {
  input.addEventListener("input", () => {
    const currentInput = input;
    const nextInput = input.nextElementSibling;

    if (currentInput.value.length > 1 && currentInput.value.length === 2) {
      currentInput.value = "";
    }

    if (
      nextInput !== null &&
      nextInput.hasAttribute("disabled") &&
      currentInput.value !== ""
    ) {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    if (!OTPinputs[3].disabled && OTPinputs[3].value !== "") {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  input.addEventListener("keyup", (e) => {
    if (e.key === "Backspace") {
      if (input.previousElementSibling !== null) {
        e.target.value = "";
        e.target.setAttribute("disabled", true);
        input.previousElementSibling.focus();
      }
    }
  });
});
