const timer = 1000;

var storage = localStorage;
var url = location.href;
var checklist = JSON.parse(storage.getItem(url));
var checkbox = getCheckbox();

function getCheckbox() {
    return document.querySelectorAll('input[type="checkbox"]');
}

function setCheckbox() {
    var tmp = []
    checkbox = getCheckbox();
    for (var i = 0; i < checkbox.length; i++){
        tmp.push(checkbox[i].checked);
    }
    storage.setItem(url, JSON.stringify(tmp));
}

function checkCheckbox(){
    checkedlist = JSON.parse(storage.getItem(url));
    for(var i = 0; i < checkbox.length; i++){
        checkbox[i].checked = checkedlist[i];
    }
}

function main(){
    setCheckbox();
    checkCheckbox();
}

if (checklist){
    checkCheckbox();
    setInterval('main()', timer);
}else{
    setInterval('main()', timer);
}