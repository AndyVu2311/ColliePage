
function postData() {
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
        return response.text();
      } else {
        throw new Error("Error: " + response.status);
      }
    })
    .then((json) => {
      console.log(json);
    })
    .catch((error) => {
      console.error(error);
    });
}
// var check = function()
// {
//   if(document.getElementById("passwordHash").value == document.getElementById("repeatPass").value){
//     document.getElementById("repeatpass").style.color = 'red';
//     document.getElementById("repeatpass").innerHTML = 'matching';
//   }else{
//     document.getElementById("repeatpass").style.color = 'red';
//     document.getElementById("repeatpass").innerHTML = 'not matching';
//   }
// }