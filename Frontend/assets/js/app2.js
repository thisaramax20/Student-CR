const tableBody = document.getElementById("tbl-body");

let newdata = `<tbody id="tbl-body">`;

const getAllData = () => {
  fetch("http://localhost:8080/student/getAll")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        newdata += `<tr id="${element.id}" onclick="showStudentDataCard(${element.id})">
                  <td>${element.id}</td>
                  <td>${element.firstName}</td>
                  <td>${element.lastName}</td>
                  <td>${element.gender}</td>
                  <td>${element.address}</td>
                  <td>${element.email}</td>
                  <td>${element.birthday}</td>
                  <td>${element.phoneNumber}</td>
                  </tr>`;
      });
      newdata += `</tbody>`;
      tableBody.innerHTML = newdata;
    });
};

window.onload = () => getAllData();

const profilePictureContainer = document.getElementById("profile-picture");

const showStudentDataCard = (clickedRow) => {
  fetch(`http://localhost:8080/student/getById/${clickedRow}`)
    .then((res) => res.json())
    .then((data) => {
      const binaryString = atob(data.profilePictureData);
      const binaryLen = binaryString.length;
      const bytes = new Uint8Array(binaryLen);
      for (let i = 0; i < binaryLen; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      const blob = new Blob([bytes], { type: "image/png" });
      const url = URL.createObjectURL(blob);
      profilePictureContainer.src = url;

      document.getElementById(
        "profile-id"
      ).innerHTML = `<b>ID</b> : ${data.id}`;
      document.getElementById(
        "profile-first-name"
      ).innerHTML = `<b>First Name</b> : ${data.firstName}`;
      document.getElementById(
        "profile-last-name"
      ).innerHTML = `<b>Last Name</b> : ${data.lastName}`;
      document.getElementById(
        "profile-gender"
      ).innerHTML = `<b>Gender</b> : ${data.gender}`;
      document.getElementById(
        "profile-address"
      ).innerHTML = `<b>Address</b> : ${data.address}`;
      document.getElementById(
        "profile-email"
      ).innerHTML = `<b>Email</b> : ${data.email}`;
      document.getElementById(
        "profile-birthday"
      ).innerHTML = `<b>Birthday</b> : ${data.birthday}`;
      document.getElementById(
        "profile-telephone"
      ).innerHTML = `<b>Phone Number</b> : ${data.phoneNumber}`;
    })
    .catch((er) => console.log(er));
};
