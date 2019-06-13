class Robot{
    constructor(hola){
        this.hola= hola;
    };
    speak(){
        console.log('Hola, Bienvenido')
    };
     doHomework(){
        console.log('Tarea en proseso, por favor espere')
    };
    Aviso(){
        console.log('Su tarea esta lista')
    };
};

let x = new Robot('aRobot');
x.speak()
x.doHomework()
x.Aviso()