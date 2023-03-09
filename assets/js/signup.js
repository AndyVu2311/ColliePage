const { doc } = require("prettier");

function postData() {
  showSpinner();
  const url = "https://vxcorp.net/api/add";
  const data = {fullName: "Test FInal", phoneNumber: "09999999999",location: "Ha Noi", passwordHash: "Hien1998@",role: "client"};
  const sendUser = {fullName: document.getElementById("fullName").value,
   phoneNumber: document.getElementById("phoneNumber").value,
   location: document.getElementById("location").value,
   passwordHash:document.getElementById("passwordHash").value,
   role: "Client"};
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(sendUser),
  };
  
  fetch(url, options)
    .then((response) => {
      if (response.ok) {
        hideSpinner();
        return response.text();
      } else {
        print("error");
        throw new Error("Error: " + response.statusText);
      }
    })
    .then((json) => {
      console.log(json);
    })
    .catch((error) => {
      console.error(error);
    });
  
}


function check()
{
  if(document.getElementById("passwordHash").value == document.getElementById("repeatPass").value){
    document.getElementById("repeatpass").style.color = 'red';
    document.getElementById("repeatpass").innerHTML = 'matching';
  }else{
    document.getElementById("repeatpass").style.color = 'red';
    document.getElementById("repeatpass").innerHTML = 'not matching';
  }
}

function showModal()
{
// var openButton = document.getElementById('open');
    var dialog = document.getElementById('dialog');
    var closeButton = document.getElementById('close');
    var overlay = document.getElementById('overlay');

    // show the overlay and the dialog
      dialog.classList.remove('hidden');
      overlay.classList.remove('hidden');

    // hide the overlay and the dialog
    closeButton.addEventListener('click', function () {
      dialog.classList.add('hidden');
      overlay.classList.add('hidden');
    });
}
function showSpinner()
{
  var overlay = document.getElementById('overlay');
  var showSpinner = document.getElementById('spinner');
  overlay.classList.remove('hidden');
  showSpinner.classList.remove('hidden');
}
function hideSpinner()
{
  var showSpinner = document.getElementById('spinner');
  showSpinner.classList.add('hidden');
  showModal();
}