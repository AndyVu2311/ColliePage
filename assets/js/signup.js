// const { doc } = require("prettier");

function postData() {
  if(document.getElementById('passwordHash').value.length < 6){
    alert('Độ dài tối thiểu là 6');
    }
  if (check()){
  showSpinner();
  const url = "https://vxcorp.net/api/user/add";
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
        clearInput();
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
  } else {
    console.log('faill');
  }
  
}

function clearInput(){
  /*
  fullName: document.getElementById("fullName").value,
   phoneNumber: document.getElementById("phoneNumber").value,
   location: document.getElementById("location").value,
   passwordHash:document.getElementById("passwordHash").value,
   role: "Client"}
  */
   const inputs = document.querySelectorAll('#fullName,#phoneNumber,#location,#passwordHash,#repeatPass');

   inputs.forEach(input => {
     input.value = '';
   });

   
}


function check()
{
  var repeatPass = document.getElementById('repeatPass');
  var passwordHash = document.getElementById('passwordHash');
  console.log(passwordHash.value.length);
  if((passwordHash.value == repeatPass.value) && passwordHash.value.length >= 6 ){
    repeatPass.classList.remove('focus:border-primary-red');
    repeatPass.classList.add('focus:border-primary');
    return true;
  }else{
    repeatPass.classList.add('focus:border-primary-red');
    repeatPass.classList.remove('focus:border-primary');
    return false;
  }
}

function inputLenght(){
  var passwordHash = document.getElementById('passwordHash');
  if (passwordHash.value.length < 6){
    alert('Độ dài tối thiểu là 6');
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