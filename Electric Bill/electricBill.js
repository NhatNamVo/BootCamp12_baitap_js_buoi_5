var mailtoVal = document.getElementsByClassName('mailto')[0];
var printData = document.getElementsByClassName('printto')[0];
var state = false;
function showMailto(){
    mailtoVal.classList.add('show');
    setTimeout(function(){
        document.getElementsByClassName('popupBill')[0].classList.add('showed');
    }, 200);
    setTimeout(function() {
        document.getElementsByClassName('content')[0].classList.add('content-show');
    }, 400);
    return;
}
function sendtoMail(){
    var emailData = document.getElementById('emailData').value;
    Email.send({
        SecureToken: "security token of your smtp",
        To: emailData,
        From: "PC1@electric.com",
        Subject: "Tiền điện tháng....",
        Body: document.getElementsByClassName('printto')[0].innerHTML
    }).then( 
        message => alert("mail sent successfully")
    );
}
function showBill(){
    state = true;
    calculate();
    printData.classList.add('show');
    setTimeout(function(){
        document.getElementsByClassName('popupBill')[0].classList.add('showed');
    }, 200);
    setTimeout(function() {
        document.getElementsByClassName('content')[0].classList.add('content-show');
    }, 400);
    return;
}
function closePopup(){
    if(document.getElementsByClassName('content')[0].classList.contains('content-show')){
        document.getElementsByClassName('content')[0].classList.remove('content-show');
        setTimeout(function(){
            document.getElementsByClassName('popupBill')[0].classList.remove('showed');
        }, 200);
        setTimeout(function(){
            if(mailtoVal.classList.contains('show')){
                mailtoVal.classList.remove('show')
            };
            if(printData.classList.contains('show')){
                printData.classList.remove('show')
            };
        }, 500);
    }
    state = false;
    showElement(5);
}

var nameKH = document.getElementById('nameData');
var powerData = document.getElementById('powerData');
var StatValue1=true;
var StatValue2=true;

nameKH.onfocus=checkData;
powerData.onfocus=checkData;

function checkData(focused){
    switch(this.id){
        case 'nameData':
            StatValue1=false;
            nameKH.addEventListener('change',function(){
                if(nameKH.value==""){
                    document.getElementsByTagName('small')[0].innerHTML="Hãy nhập tên KH";
                }
                else{
                    document.getElementsByTagName('small')[0].innerHTML="";
                    StatValue1=true;
                }
            });
            break;
        case 'powerData':
            StatValue2=false;
            powerData.addEventListener('change',function(){
                if(powerData.value==""){
                    document.getElementsByTagName('small')[1].innerHTML="Hãy nhập số điện năng tiêu thụ";
                }
                else if(isNaN(parseFloat(powerData.value))){
                    document.getElementsByTagName('small')[1].innerHTML="Hãy nhập số điện năng tiêu thụ";
                }
                else{
                    document.getElementsByTagName('small')[1].innerHTML="";
                    StatValue2=true;
                }
            });
            break;
    }
    if(StatValue2==false){
        if(powerData.value==""){
            document.getElementsByTagName('small')[1].innerHTML="Hãy nhập số điện năng tiêu thụ";
        };
    };
    if(StatValue1==false){
        if(nameKH.value==""){
            document.getElementsByTagName('small')[0].innerHTML="Hãy nhập tên KH";
        };
    };
}
function calculate(){
    var electricFee = 0;
    var taxFee = 0;
    var totalFee = 0;
    var powerdataVal = parseFloat(powerData.value);

    if(StatValue2==true||StatValue1==true){
        if(powerData.value==""){
            document.getElementsByTagName('small')[1].innerHTML="Hãy nhập số điện năng tiêu thụ";
            StatValue2==false;
        };
        if(nameKH.value==""){
            document.getElementsByTagName('small')[0].innerHTML="Hãy nhập tên KH";
            StatValue1==false;
        };
        
    };
    if(StatValue2==false||StatValue1==false){
        return;
    };
    if(powerdataVal<=50){
        //processing
        electricFee = 500*powerdataVal;
        taxFee = 10*electricFee/100;
        totalFee = electricFee + taxFee;
        posOutput(electricFee,taxFee,totalFee,powerdataVal);
        if(state==true){
            printOutput(1,powerdataVal);
        }
    }
    else if(powerdataVal>50&&powerdataVal<=100){
        electricFee = 500*50+650*(powerdataVal-50);
        taxFee = 10*electricFee/100;
        totalFee = electricFee + taxFee;
        posOutput(electricFee,taxFee,totalFee,powerdataVal);
        if(state==true){
            printOutput(2,powerdataVal);
        }
    }
    else if(powerdataVal>100&&powerdataVal<=200){
        electricFee = 500*50+650*100+850*(powerdataVal-100);
        taxFee = 10*electricFee/100;
        totalFee = electricFee + taxFee;
        posOutput(electricFee,taxFee,totalFee,powerdataVal);
        if(state==true){
            printOutput(3,powerdataVal);
        }
    }
    else if(powerdataVal>200&&powerdataVal<=350){
        electricFee = 500*50+650*100+850*200+1100*(powerdataVal-200);
        taxFee = 10*electricFee/100;
        totalFee = electricFee + taxFee;
        posOutput(electricFee,taxFee,totalFee,powerdataVal);
        if(state==true){
            printOutput(4,powerdataVal);
        }
    }
    else if(powerdataVal>350){
        electricFee = 500*50+650*100+850*200+1100*350+1300*(powerdataVal-350);
        taxFee = 10*electricFee/100;
        totalFee = electricFee + taxFee;
        posOutput(electricFee,taxFee,totalFee,powerdataVal);
        if(state==true){
            printOutput(5,powerdataVal);
        }
    }
    return;
}
function posOutput(electricFee,taxFee,totalFee,powerdataVal){
    document.getElementsByClassName('feeID')[0].innerHTML=electricFee;
    document.getElementsByClassName('taxID')[0].innerHTML=taxFee;
    document.getElementsByClassName('TotalID')[0].innerHTML=totalFee;
    if(state==true){
        document.getElementsByClassName('nameResult')[0].innerHTML=nameKH.value;
        document.getElementsByClassName('KWH')[0].innerHTML=powerdataVal;
        document.getElementsByClassName('EfeeResult')[0].innerHTML=electricFee;
        document.getElementsByClassName('TaxResult')[0].innerHTML=taxFee;
        document.getElementsByClassName('totalBill')[0].innerHTML=totalFee;
    }
    return;
}

function printOutput(val,powerdataVal){
    showElement(val);
    switch(val){
        case 1:
            document.getElementsByClassName('KW')[0].innerHTML=powerdataVal;
            document.getElementsByClassName('feeResult')[0]=500*parseFloat(document.getElementsByClassName('KW')[0].innerHTML);
            break;

        case 2:
            document.getElementsByClassName('KW')[0].innerHTML=50;
            document.getElementsByClassName('feeResult')[0].innerHTML=500*parseFloat(document.getElementsByClassName('KW')[0].innerHTML);
            document.getElementsByClassName('KW')[1].innerHTML=powerdataVal-50;
            document.getElementsByClassName('feeResult')[1].innerHTML=650*parseFloat(document.getElementsByClassName('KW')[1].innerHTML);
            break;

        case 3:
            document.getElementsByClassName('KW')[0].innerHTML=50;
            document.getElementsByClassName('feeResult')[0].innerHTML=500*parseFloat(document.getElementsByClassName('KW')[0].innerHTML);

            document.getElementsByClassName('KW')[1].innerHTML=100;
            document.getElementsByClassName('feeResult')[1].innerHTML=650*parseFloat(document.getElementsByClassName('KW')[1].innerHTML);

            document.getElementsByClassName('KW')[2].innerHTML=powerdataVal-100;
            document.getElementsByClassName('feeResult')[2].innerHTML=850*parseFloat(document.getElementsByClassName('KW')[2].innerHTML);
            break;

        case 4:
            document.getElementsByClassName('KW')[0].innerHTML=50;
            document.getElementsByClassName('feeResult')[0].innerHTML=500*parseFloat(document.getElementsByClassName('KW')[0].innerHTML);

            document.getElementsByClassName('KW')[1].innerHTML=100;
            document.getElementsByClassName('feeResult')[1].innerHTML=650*parseFloat(document.getElementsByClassName('KW')[1].innerHTML);

            document.getElementsByClassName('KW')[2].innerHTML=200;
            document.getElementsByClassName('feeResult')[2].innerHTML=850*parseFloat(document.getElementsByClassName('KW')[2].innerHTML);

            document.getElementsByClassName('KW')[3].innerHTML=powerdataVal-200;
            document.getElementsByClassName('feeResult')[3].innerHTML=1100*parseFloat(document.getElementsByClassName('KW')[3].innerHTML);
            break;

        case 5:
            document.getElementsByClassName('KW')[0].innerHTML=50;
            document.getElementsByClassName('feeResult')[0].innerHTML=500*parseFloat(document.getElementsByClassName('KW')[0].innerHTML);

            document.getElementsByClassName('KW')[1].innerHTML=100;
            document.getElementsByClassName('feeResult')[1].innerHTML=650*parseFloat(document.getElementsByClassName('KW')[1].innerHTML);

            document.getElementsByClassName('KW')[2].innerHTML=200;
            document.getElementsByClassName('feeResult')[2].innerHTML=850*parseFloat(document.getElementsByClassName('KW')[2].innerHTML);

            document.getElementsByClassName('KW')[3].innerHTML=350;
            document.getElementsByClassName('feeResult')[3].innerHTML=1100*parseFloat(document.getElementsByClassName('KW')[3].innerHTML);

            document.getElementsByClassName('KW')[4].innerHTML=powerdataVal-350;
            document.getElementsByClassName('feeResult')[4].innerHTML=1300*parseFloat(document.getElementsByClassName('KW')[4].innerHTML);
            break;
    }
    return;
}

function showElement(val){
    if(state==true){
        for(var i=0;i<val;i++){
            document.getElementsByClassName('first')[i].classList.add('show');
        }
    }
    else{
        for(var i=0;i<val;i++){
            document.getElementsByClassName('first')[i].classList.remove('show');
        }
    }
}