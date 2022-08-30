// #1

function parseCount(value){
    digit = parseInt(value, 10);
    // return (digit) ? digit : throw new Error("Невалидное значение");
    if(digit){
        return digit;
    }else {
        throw new Error('Невалидное значение');
    }
}

function validateCount(value){
    
    try{
       return parseCount(value);
    }catch(error){
        return error;
    }
}

// #2

class Triangle{
    constructor(a, b, c){
        this.sideA = a,
        this.sideB = b,
        this.sideC = c,
        this.existTriangle = this.toBeDefined()
    }

    toBeDefined(){
        let arr = [this.sideA, this.sideB, this.sideC];
        let posibility = arr.some(item => item > this.getPerimeter() - item);
       
        if(posibility){
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }
        
    getPerimeter(){
        return (this.sideA + this.sideB + this.sideC);
    }
    
    getArea(){
        let p = this.getPerimeter() / 2;
        return +Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC)).toFixed(3);
    }
}


function getTriangle(a, b, c){
    let obj = {
        getPerimeter:() => 'Ошибка! Треугольник не существует',
        getArea:() => 'Ошибка! Треугольник не существует',
    };
    let perimetr = [...arguments].reduce((acc, i) => acc + i, 0);
    let toBeDefined = [...arguments].some(item => item > perimetr - item);

    if(!toBeDefined){
        return new Triangle(a, b, c);
    }else{
        try{
            return new Triangle(a, b, c); 
        } catch(error){
            return obj; 
        }
    }
}

    
