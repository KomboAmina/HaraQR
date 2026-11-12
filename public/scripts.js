//injecting html pages into their main tab
function generateQRCode(givenString, divID, labelID){

    var qrdiv=document.getElementById(divID);

    qrdiv.innerHTML='';

    if(givenString.length<=7089){

        document.getElementById(labelID).innerHTML="<p class='uk-text-bold'>"+givenString+"</p>";

        var qrCode= new QRCode(qrdiv, {
            text: givenString,/*
            colorDark: "#110B12",
            colorLight: "#D9D3C8",*/
            width:256,
            height:256
        });

    }

    else{

        document.getElementById(labelID).innerHTML="<p class='uk-text-danger uk-text-bold'>qr code can only generated with less than 7089 characters.</p>";

    }

}

function copyToClipboard(copyContent){

  navigator.clipboard.writeText(copyContent);

  alert("copied to clipboard!");

}

function displayCharacterCount(characterString, labelDiv){

  var labeldiv = document.getElementById(labelDiv);

  labeldiv.innerHTML = characterString.length+ "";

}
