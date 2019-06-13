
class Point{
constructor(x,y){
this._x = x;
this._y = y;
};

draw() {console.log('draw line');};
clone(){};

get x (){return this._x;}
get y (){return this._y;}
set x(p1) {this._x=x;}
set y(p2) {this._y=y;}
};
