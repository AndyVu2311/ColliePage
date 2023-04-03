
function checkOS(){
    var OSName = "Unknown";
if (window.navigator.userAgent.indexOf("Windows NT 10.0")!= -1) OSName="Windows 10";
if (window.navigator.userAgent.indexOf("Windows NT 6.3") != -1) OSName="Windows 8.1";
if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSName="Windows 8";
if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSName="Windows 7";
if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSName="Windows Vista";
if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSName="Windows XP";
if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) OSName="Windows 2000";
if (window.navigator.userAgent.indexOf("Mac")            != -1) OSName="Mac/iOS";
if (window.navigator.userAgent.indexOf("X11")            != -1) OSName="UNIX";
if (window.navigator.userAgent.indexOf("Linux")          != -1) OSName="Linux";
console.log(OSName);
if (window.navigator.userAgent.indexOf("Windows") != -1){ 
  console.log("ok")}
   else 
   {
  console.log("Not OK");

 
  //   const inputs = document.querySelectorAll('#fullName,#phoneNumber,#location,#passwordHash,#repeatPass');
  const para = document.querySelector('#para1');
  para.innerHTML = 'Ứng dụng chỉ hộ trợ Windows tại thời điểm hiện tại. \n Bạn đang sử dụng ' +OSName + '\n Vui lòng thử lại sau!';
  const title = document.querySelector('#dialogTitle')
  title.innerHTML = "Không tải được!"
  console.log(para);
  showModal();
  }
  
}
let btn = document.getElementById("DownloadFunc");
btn.addEventListener('click', event => {
  checkOS();
});



