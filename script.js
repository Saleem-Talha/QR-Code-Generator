const apiURL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let imgBox = document.getElementById("img-box");
let qrImage= document.getElementById("qr-image");
let qrText= document.getElementById("qr-text");

function generateQR() {
    
    if(qrText.value.length > 0) {
        let url = apiURL + qrText.value;
        imgBox.innerHTML = `<img src="${url}" alt="QR Code">`;
        imgBox.classList.add("show-img");
    }else{
        qrText.classList.add("error");
        setTimeout(()=>{
            qrText.classList.remove("error");
        },1000)
    }
}