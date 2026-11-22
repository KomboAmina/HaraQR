//injecting html pages into their main tab
function generateQRCode(givenString, divID, labelID, side=256){

    var qrdiv=document.getElementById(divID);

    qrdiv.innerHTML='';

    if(givenString.length<=7089){

        document.getElementById(labelID).innerHTML="<p class='uk-text-bold'>"+givenString+"</p>";

        var qrCode= new QRCode(qrdiv, {
            text: givenString,/*
            colorDark: "#110B12",
            colorLight: "#D9D3C8",*/
            width:side,
            height:side
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

function displayCharacterCount(characterString, labelDiv, maxLength = 0){

  var labeldiv = document.getElementById(labelDiv);

  labeldiv.innerHTML = characterString.length+ "";

  if(maxLength > 0){

    labeldiv.innerHTML = characterString.length + " / " + maxLength;

  }

}

function goToAnchor(anchorID){

    const element = document.getElementById(anchorID);

    // Smooth scroll to the element
    element.scrollIntoView({
        behavior: "smooth", // "smooth" or "instant" / "auto"
        block: "start",     // Vertical alignment: "start", "center", "end", or "nearest"
        inline: "nearest"   // Horizontal alignment: "start", "center", "end", or "nearest"
    });


}

function isValidURL(checkString){

    try{
        new URL(checkString);
        return true;
    }
    catch(err){
        return false;
    }

}

function removeCharacters(targetCharacter, targetString){

    return targetString.replaceAll(targetCharacter, '');

}
