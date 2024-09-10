const guardianContainer = document.getElementById("guardian");
const studentContainer = document.getElementById("personal");
const photoContainer = document.getElementById("photo");
let firstName = "";
let lastName = "";
let birthday = "";
let email = "";
let telephone = "";
let address = "";
let gender = "";

document.getElementById("btn-proceed-student").addEventListener("click", () => {
  firstName = document.getElementById("txt-first-name").value;
  lastName = document.getElementById("txt-last-name").value;
  birthday = document.getElementById("txt-birthday").value;
  email = document.getElementById("txt-email").value;
  telephone = document.getElementById("txt-telephone").value;
  address = document.getElementById("txt-address").value;
  let isGenderSelected = document.querySelector(
    'input[name="option-gender"]:checked'
  );
  gender = isGenderSelected ? isGenderSelected.value : "";

  if (
    firstName === "" ||
    lastName === "" ||
    birthday === "" ||
    email === "" ||
    telephone === "" ||
    address === "" ||
    gender === ""
  ) {
    alert("All fields must be filled out...");
  } else {
    studentContainer.style.display = "none";
    photoContainer.style.display = "none";
    guardianContainer.style.display = "block";
  }
});
let guardianName = "";
let guardianOccupation = "";
let guardianTelephone = "";
let guardianType = "";
document
  .getElementById("btn-proceed-guardian")
  .addEventListener("click", () => {
    guardianName = document.getElementById("txt-guardian-name").value;
    guardianOccupation = document.getElementById(
      "txt-guardian-occupation"
    ).value;
    guardianTelephone = document.getElementById("txt-guardian-telephone").value;
    let isGuardianSelected = document.querySelector(
      'input[name="guardian-option"]:checked'
    );
    guardianType = isGuardianSelected ? isGuardianSelected.value : "";

    if (
      guardianName === "" ||
      guardianOccupation === "" ||
      guardianTelephone === "" ||
      guardianType === ""
    ) {
      alert("All fields must be filled out...");
    } else {
      studentContainer.style.display = "none";
      guardianContainer.style.display = "none";
      photoContainer.style.display = "block";
    }
  });

let imageInput = "";
document.getElementById("btn-proceed-photo").addEventListener("click", () => {
  imageInput = document.getElementById("profile-image").files[0];
  if (imageInput) {
    getBase64Image(imageInput, (base64Image) => {
      const base64ImageData = base64Image.replace(
        /^data:image\/\w+;base64,/,
        ""
      );

      const payLoad = {
        profilePictureData: base64ImageData,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: telephone,
        address: address,
        birthday: birthday,
        gender: gender,
        guardianName: guardianName,
        guardianOccupation: guardianOccupation,
        guardianPhoneNumber: guardianTelephone,
        guardianType: guardianType,
      };
      fetch("http://localhost:8080/student/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payLoad),
      })
        .then((res) => res.text())
        .then((data) => console.log(data))
        .catch((er) => console.log(er));
    });
  } else {
    alert("Please insert your profile picture");
  }
});

const getBase64Image = (file, callback) => {
  const reader = new FileReader();
  reader.onload = (event) => {
    callback(event.target.result);
  };
  reader.readAsDataURL(file);
};
