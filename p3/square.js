let square = function (list){
    return list.map(function(number) {
        return number*number;
    });
};
let a= [5,4,3,2,1];
console.log(square(a));