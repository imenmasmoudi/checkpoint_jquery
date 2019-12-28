
function changeBold(){
    var textestate = document.getElementById('message').style.fontWeight;
    if (textestate !='bold'){
        document.getElementById('message').style.fontWeight ='bold';
    }else {
        document.getElementById('message').style.fontWeight='normal';
    }
}

function changeSize(event) {

document.getElementById('message').style.fontSize= event.value;

}

function changefontfamily(event){
 
 document.getElementById('message').style.fontFamily=event.value;
}

function changeitalic(){
    var textestate = document.getElementById('message').style.fontStyle;
    if (textestate !='italic'){
        document.getElementById('message').style.fontStyle ='italic';
    }else {
        document.getElementById('message').style.fontStyle ='normal';
    }
}
function changestyle(){
    var textestate = document.getElementById('message').style.textDecoration;
    if (textestate !='underline'){
        document.getElementById('message').style.textDecoration ='underline';
    }else {
        document.getElementById('message').style.textDecoration ='none';
    }
}


/*var i=0;
setInterval (function()
{ 
    console.log(i++);
}, 555)  */


