const wrapper=document.querySelector(".wrapper");
qrinput=wrapper.querySelector(".form input");
generatebtn=wrapper.querySelector(".form button");
qrimg=wrapper.querySelector(".qr-code img");

generatebtn.addEventListener("click",function(){
    let qrvalue=qrinput.value;
    if(!qrvalue) return;
    generatebtn.innerText="Generating QR Code....";
    qrimg.src=`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrvalue}`;
    qrimg.addEventListener("load",function(){
        wrapper.classList.add("active");
        generatebtn.innerText="QR Code Generater";
    })
   qrinput.addEventListener("keyup",function(){
    if(!qrinput.value){
        wrapper.classList.remove("active");
    }
   })
})

let btndownload=document.getElementById("download");
btndownload.addEventListener("click",function(){
    const imageUrl = qrimg.src;
    fetch(imageUrl)
      .then(function(response) {
        return response.blob();
      })
      .then(function(blob) {
        saveAs(blob, "QR-Code.png");
      });   
})