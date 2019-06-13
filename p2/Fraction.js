class Fraction
{
    constructor(n,d)
    {
        if( Number.isInteger(n)&& Number.isInteger(d))
        {
            this.n =n;
            this.d =d;       
        }
        else{
            this.n =0;
            this.d =0;    
        }
    };
    euclides(x,y)
    {
     
        while(x != y)
        {
            if(x>y)
            {
                x = x - y;
            }
            else
            {
                y = y - x;
            }
        }
        console.log('Euclides')
        console.log(y);
    }

    sum (x)
    {
        let n = this.n*x.d + x.n *this.d;
        let d = this.d*x.d;
        return new Fraction(n,d);
    }
    subt(x)
    {
        let n = this.n*x.d - x.n *this.d;
        let d = this.d*x.d;
        return new Fraction(n,d);
    }
    div(x)
    {
        let n = this.n*x.d;
        let d = this.d*x.n;
        return new Fraction(n,d);
    }
    mul(x)
    {
        let n = this.n*x.n;
        let d = this.d*x.d;
        this.euclides(n,d);
        return new Fraction(n,d);
    }
}

let x1 = new Fraction(8,7)
let x2 = new Fraction(9,4)

console.log(' Suma: ' )
console.log(x1.sum(x2))
console.log('Resta: ')
console.log(x1.subt(x2))
console.log('División: ')
console.log(x1.div(x2))
console.log('Multiplicación: ')
console.log(x1.mul(x2))
