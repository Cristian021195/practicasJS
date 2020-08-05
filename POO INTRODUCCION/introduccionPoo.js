//clases
class rectangulo{
    constructor(lado1, lado2, color){
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.color = color;
    }
    getArea(){
        return this.lado1 * this.lado2;
    }
    getPerimetroRect(){
        return this.lado1*2 + this.lado2*2;
    }
    getColor(){
        return this.color;
    }
}

class cuadrado extends rectangulo{
    getPerimetro(){
        return this.lado1*4;
    }
}

class punto{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    static distancia(a,b){//donde a y b son puntos que se pasaron por parametro
        let dx = a.x - b.x;
        let dy = a.y - b.y;

        return Math.sqrt(dx * dx + dy * dy).toFixed(2)
    }
}

class Car {
    constructor(brand) {
      this._carname = brand;
    }
    get carname() {
      return this._carname;
    }
    set carname(x) {
      this._carname = x;
    }
  }

//ejecucion

let cuad1 = new cuadrado(2, 2,'rojo');
let rect1 = new rectangulo(2,4,'amarillo')
let mycar = new Car("Ford");
mycar.carname = "Falcon";//para setear

console.log(`Area del cuadrado: ${cuad1.getArea()}`)
console.log(`Perimetro del cuadrado: ${cuad1.getPerimetro()} y su color es ${cuad1.getColor()}`)

console.log(`Area del rectangulo: ${rect1.getArea()}`)
console.log(`Perimetro del rectangulo: ${rect1.getPerimetroRect()} y su color es ${rect1.getColor()}`)

console.log(`La distancia entre los dos punto es: ${(punto.distancia(new punto(1,2), new punto(2,3)))}`)

console.log(`El nombre del auto es: ${mycar.carname}`)//una vez seteada la muestra