function getNum(num){
    document.getElementById('result').value += num;
}

function getRes(){
    document.getElementById('result').value = eval(document.getElementById('result').value);
}

function clearNum(){
    document.getElementById('result').value = " ";
}

function removeNum(){
    var res = document.getElementById('result').value
    document.getElementById('result').value = document.getElementById('result').value.slice(0,res.length-1);
}