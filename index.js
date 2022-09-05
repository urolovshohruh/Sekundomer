var minut = 0;
var sekund = 0;;
var millisekund = 0;
const noll=`00`
document.getElementById('minut').innerHTML = minut;
document.getElementById('sekund').innerHTML = sekund;

document.getElementById('go').addEventListener('click',function(){
    document.getElementById('millisekund').innerHTML = noll;
    document.getElementById('sekund').innerHTML = noll;
    document.getElementById('minut').innerHTML = noll;
    millisekund=0;
    sekund=0;
    minut=0;
});
let myInterval = setInterval(sekundomer, 10);
function sekundomer() {
    if (millisekund < 10) resmilli = `0${millisekund}`;
    else resmilli = millisekund;
    document.getElementById('millisekund').innerHTML = resmilli;
    if (sekund < 10) res = `0${sekund}`;
    else res = sekund;
    document.getElementById('sekund').innerHTML = res;
    if (minut < 10) resmin = `0${minut}`;
    else resmin = minut;

    document.getElementById('minut').innerHTML = resmin;
    millisekund++;
    if (millisekund == 100) {
        millisekund = 0;
        sekund++;
        if (sekund == 60) {
            sekund = 0;
            minut++;
        }
    }
}


var result = true;
document.getElementById('stop').addEventListener('click', function () {
    if (result) {
        clearInterval(myInterval);
        result=false;
        document.getElementById('stop').innerHTML='Davom Etish';
    }
    else{
         
        myInterval = setInterval(sekundomer, 10);                                                                                            
        result=true;
        document.getElementById('stop').innerHTML='To\'xtatish';
    }
    
});


