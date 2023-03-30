
const fname = document.getElementById('fName');
const phoneNum = document.getElementById('phoneNum');
const mess = document.getElementById('mess');
const submit = document.getElementById('submit');

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}


submit.addEventListener('submit',(e)=>{
    showSpinner();

    e.preventDefault();
    let ebody = `
    <h1>Họ tên: </h1>${fname.value}
    <br>
    <h1>Số đt: </h1>${phoneNum.value}
    <br>
    <h1>Tin nhắn: </h1>${mess.value}
    `;

    Email.send({
        SecureToken : "ed26870f-ec1a-4bf3-bcf3-9464ad3f9e8b", //add your token here
        To : 'vuxuanhien.2311@gmail.com', 
        From : "colliie.client.send@gmail.com",
        Subject : "ClientContact",
        Body : ebody
    }).then(
      fname.value = "",
      phoneNum.value ="",
      mess.value= "",
      delay(3000).then(() => hideSpinner())
    );

    
     
});


function showSpinner(second) 
{
  var overlay = document.getElementById('overlay');
  var showSpinner = document.getElementById('spinner');
  overlay.classList.remove('hidden');
  showSpinner.classList.remove('hidden');
  
  // await delay(5000);
}
function hideSpinner()
{
  var showSpinner = document.getElementById('spinner');
  showSpinner.classList.add('hidden');
  showModal();
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