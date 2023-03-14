
const fname = document.getElementById('fName');
const phoneNum = document.getElementById('phoneNum');
const mess = document.getElementById('mess');
const submit = document.getElementById('submit');

submit.addEventListener('submit',(e)=>{
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
      message => alert(message)
    );
});