//injecting html pages into their main tab
function generateQRCode(givenString, divID, labelID){

    var qrdiv=document.getElementById(divID);

    qrdiv.innerHTML='';

    if(givenString.length<=1270){

        document.getElementById(labelID).innerHTML=givenString;

        var qrCode= new QRCode(qrdiv, {
            text: givenString,/*
            colorDark: "#110B12",
            colorLight: "#D9D3C8",*/
            width:256,
            height:256
        });

    }

    else{

        document.getElementById(labelID).innerHTML="qr code can only generated with less than 1271 characters.";

    }

}
