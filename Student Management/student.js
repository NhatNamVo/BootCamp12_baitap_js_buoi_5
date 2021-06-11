var mainSelect = document.getElementsByClassName("content")[0];
var infoSelect = document.getElementsByClassName('content-info')[0];

function changeTag(){
    mainSelect.classList.add('content-move');
    infoSelect.classList.add('content-info-show');
}
function closeinfo(){
    mainSelect.classList.remove('content-move');
    infoSelect.classList.remove('content-info-show');
}

// input
var targetGrade=document.getElementById('targetID');
var grade1=document.getElementById('diem1ID');
var grade2=document.getElementById('diem2ID');
var grade3=document.getElementById('diem3ID');
var prioritizeArea=document.getElementById('AreaID');
var prioritizeObject=document.getElementById('ObjectID');
var cfocus1=0;
var cfocus2=0;
var cfocus3=0;
var cfocus4=0;
// output value

var gradeVal = document.getElementsByClassName('sumGrade')[0];
var resultText = document.getElementsByClassName('resultText')[0];

// processing
// check value input
targetGrade.onfocus=checkdataIn;
grade1.onfocus=checkdataIn;
grade2.onfocus=checkdataIn;
grade3.onfocus=checkdataIn;

function checkdataIn(focused){
    console.log(this.id);
    switch(this.id){
        case "targetID":
            cfocus1=1;
            targetGrade.addEventListener('change',function(){
                console.log(targetGrade.value);
                cfocus1=2;
                if(targetGrade.value==""){
                    document.getElementsByClassName('noteID')[0].innerHTML="Bạn chưa nhập điểm";
                }
                else if(isNaN(targetGrade.value)){
                    document.getElementsByClassName('noteID')[0].innerHTML="Hãy nhập ký tự số";
                }
                else{
                    document.getElementsByClassName('noteID')[0].innerHTML="";
                    cfocus1=0;
                }
            });
            break;
        case 'diem1ID':
            cfocus2=1;
            grade1.addEventListener('change',function(){
                console.log(grade1.value);
                cfocus2=2;
                if(grade1.value==""){
                    document.getElementsByClassName('noteID')[1].innerHTML="Bạn chưa nhập điểm";
                }
                else if(isNaN(grade1.value)){
                    document.getElementsByClassName('noteID')[1].innerHTML="Hãy nhập ký tự số";
                }
                else{
                    document.getElementsByClassName('noteID')[1].innerHTML="";
                    cfocus2=0;
                }
            });
            break;
        case 'diem2ID':
            cfocus3=1;
            grade2.addEventListener('change',function(){
                console.log(grade2.value);
                cfocus3=2;
                if(grade2.value==""){
                    document.getElementsByClassName('noteID')[2].innerHTML="Bạn chưa nhập điểm";
                }
                else if(isNaN(grade2.value)){
                    document.getElementsByClassName('noteID')[2].innerHTML="Hãy nhập ký tự số";
                }
                else{
                    document.getElementsByClassName('noteID')[2].innerHTML="";
                    cfocus3=0;
                }
            });
            break;
        case 'diem3ID':
            cfocus4=1;
            grade3.addEventListener('change',function(){
                console.log(grade3.value);
                cfocus4=0;
                if(grade3.value==""){
                    document.getElementsByClassName('noteID')[3].innerHTML="Bạn chưa nhập điểm";
                }
                else if(isNaN(grade3.value)){
                    document.getElementsByClassName('noteID')[3].innerHTML="Hãy nhập ký tự số";
                }
                else{
                    document.getElementsByClassName('noteID')[3].innerHTML="";
                    cfocus4=0;
                }
            });
            break;           
    }
    if(cfocus1==1){
        if(targetGrade.value==""){
            document.getElementsByClassName('noteID')[0].innerHTML="Bạn chưa nhập điểm chuẩn";
        }
    };
    if(cfocus2==1){
        if(grade1.value==""){
            document.getElementsByClassName('noteID')[1].innerHTML="Bạn chưa nhập điểm";
        }
    };
    if(cfocus3==1){
        if(grade2.value==""){
            document.getElementsByClassName('noteID')[2].innerHTML="Bạn chưa nhập điểm";
        }
    };
    if(cfocus4==1){
        if(grade3.value==""){
            document.getElementsByClassName('noteID')[3].innerHTML="Bạn chưa nhập điểm";
        }
    };
}
//output & processing
function calculate(){
    if(cfocus1==0||cfocus2==0||cfocus3==0||cfocus4==0){
        if(targetGrade.value==""||grade1.value==""||grade2.value==""||grade3.value==""){
            if(targetGrade.value==""){
                document.getElementsByClassName('noteID')[0].innerHTML="Bạn chưa nhập điểm chuẩn";
            };
            if(grade1.value==""){
                document.getElementsByClassName('noteID')[1].innerHTML="Bạn chưa nhập điểm";
            };
            if(grade2.value==""){
                document.getElementsByClassName('noteID')[2].innerHTML="Bạn chưa nhập điểm";
            };
            if(grade3.value==""){
                document.getElementsByClassName('noteID')[3].innerHTML="Bạn chưa nhập điểm";
            };
            return;
        }
        
    }
    else if(cfocus1==1||cfocus2==1||cfocus3==1||cfocus4==1){
        return;
    }
    var sumGrader=parseFloat(grade1.value)+parseFloat(grade2.value)+parseFloat(grade3.value)+parseFloat(prioritizeArea.value)+parseFloat(prioritizeObject.value);

    gradeVal.innerHTML=sumGrader;

    if(parseFloat(grade1.value)==0||parseFloat(grade2.value)==0||parseFloat(grade3.value)==0){
        resultText.innerHTML="Không trúng tuyển";
        return;
    };
    if(sumGrader>=parseFloat(targetGrade.value)){
        resultText.innerHTML="Trúng tuyển";
    }
    else{
        resultText.innerHTML="Không trúng tuyển"; 
    }
    return;
}