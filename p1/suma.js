
function suma(a,b){
    if(isNumber(a) && isNumber(b)){
	return a+b;
    }
}

function isNumber(x){
    if(typeof x=== 'number')
	return true;
    else
	return false;
