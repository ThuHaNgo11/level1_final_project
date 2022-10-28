// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success')
// }

// const setSuccess = element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// };

// function send() {
//     var arr = document.getElementsByClassName('input')
//     var username = arr[0].value;
//     var number = arr[1].value;
//     var attend = arr[4].value;
//     if (username === '' || number === '' || attend === '') {
//         alert("please fill all fields");
//         return;}
//     if (usernameValue === '') {
//         setError(username, 'The name field is required');
//     } else {
//         setSuccess(username);
//     }

//     if (number === '') {
//         setError(number, 'The text field is required');
//     } else {
//         setSuccess(number);
//     }

//     if (attend === '') {
//         setError(attend, 'The attend field is required');
//     } else {
//         setSuccess(attend);
//     }

//         confirm

// }

// RSVP
const $name = document.getElementById("name");
const $phoneNumber = document.getElementById("phoneNumber");
const $choiceRadio = document.getElementsByClassName("choiceRadio");
const $numberGuest = document.getElementById("numberGuest");
const $attend = document.getElementById("attend");
const $meal = document.getElementById("meal");
const $submitBtn = document.getElementById("submitBtn");
const $errorMessage = document.getElementsByClassName("errorMessage");
const $modalSubmit = document.getElementById("modal-submit");
const $closeModal = document.getElementById("closeModal");
const $modalSubmitContent = document.getElementById("modal-submit-content");

const regName = /^[a-zA-Z ]+$/;

$submitBtn.addEventListener("click", () => {
  let flag = true;

  if ($name.value) {
    if (!regName.test($name.value)) {
      $errorMessage[0].innerHTML = "The name field should be string";
      flag = false;
    }
  } else {
    $errorMessage[0].innerHTML = "The name field is required";
    flag = false;
  }

  if ($phoneNumber.value) {
    if (isNaN($phoneNumber.value)) {
      $errorMessage[1].innerHTML = "The number field is not a number";
      flag = false;
    }

    if (!($phoneNumber.value.length === 10)) {
      $errorMessage[1].innerHTML = "The number field equals 10 characters";
      flag = false;
    }
  } else {
    $errorMessage[1].innerHTML = "The number field is required";
    flag = false;
  }

  if (isNaN($numberGuest.value)) {
    $errorMessage[2].innerHTML = "The guests field is required";
    flag = false;
  }

  if (!$attend.value) {
    $errorMessage[3].innerHTML = "The attend field is required";
    flag = false;
  }

  if ($meal.value === "Meal Preferences") {
    $errorMessage[4].innerHTML = "The meal field is required";
    flag = false;
  }

  let choice = "";
  for (let radio of $choiceRadio) {
    if (radio.checked) choice = radio.getAttribute("id");
  }

  if (flag && choice === "accept") {
    $modalSubmit.style.display = "flex";
    $modalSubmitContent.innerHTML = "Thank you for attending our wedding party";
  } else if (flag && choice === "not") {
    $modalSubmit.style.display = "flex";
    $modalSubmitContent.innerHTML = "We sympathize when you do not attend";
  }

  console.log(choice);
});

$name.addEventListener("change", () => {
  $errorMessage[0].innerHTML = "";
});

$phoneNumber.addEventListener("change", () => {
  $errorMessage[1].innerHTML = "";
});

$numberGuest.addEventListener("change", () => {
  $errorMessage[2].innerHTML = "";
});

$attend.addEventListener("change", () => {
  $errorMessage[3].innerHTML = "";
});

$meal.addEventListener("change", () => {
  $errorMessage[4].innerHTML = "";
});

$closeModal.addEventListener("click", () => {
  $modalSubmit.style.display = "none";
});

// Gallery
const $closeModalGallery = document.getElementById("closeModalGallery");
const $modalGallery = document.getElementById("modal-gallery");
const $galleryBox = document.getElementsByClassName("galleryBox");

for (let box of $galleryBox) {
  box.addEventListener("click", () => {
    $modalGallery.style.display = "flex";
    let src = box.firstElementChild.getAttribute("src");

    $modalGallery.firstElementChild.setAttribute("src", src);
  });
}

// $galleryList.addEventListener("click", (event) => {
//   $modalGallery.style.display = "flex";
//   console.log(event.target);
//   let src = event.target.firstElementChild.getAttribute("src");

//   $modalGallery.firstElementChild.setAttribute("src", src);
// });

$closeModalGallery.addEventListener("click", () => {
  $modalGallery.style.display = "none";
});
