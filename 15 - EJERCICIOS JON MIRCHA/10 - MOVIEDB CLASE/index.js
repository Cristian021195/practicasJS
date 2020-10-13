class Pelicula{
    constructor({id, titulo, director, estreno, pais, generos, calificacion}){
        //this.id = id;
        this.id = this.validarIMDB(id);
        this.titulo = this.validarTitulo(titulo);
        this.director = this.validarDirector(director);
        this.estreno = this.validarEstreno(estreno);
        this.pais = this.validarPaises(pais);
        this.generos = this.validarGenero(generos);
        this.calificacion = this.validarCalificacion(calificacion);
   }

   static get GenerosAceptados(){
       return ['Comedia','Drama','Ficcion','Terror','Documental','Romance','Adolecentes','Niños', 'Adultos'];
   }
   
   validarIMDB(id){
       if(this.validarCadena("IMDB id", id)){
            if(!(/^([a-z]){2}([0-9]){7}/.test(id))){// sombrero con ALT + 94
                console.error(`IMDB id "${id}" no es valido, debe tener 9 caracteres, los dos primeros letras minusculas, los 7 restantes numeros.`)
                return null;
            }else{ return id; }
       }else{
           return null;
       }
   }

   /*validaciones genericas*/
   validarCadena(propiedad, valor){
       if(!valor){return console.warn(`${propiedad} "${valor}" esta vacio`)}
       if(typeof valor !=='string'){return console.error(`${propiedad} "${valor}" NO es una cadena de texto`)}
       return true;
   }
   validarTitulo(titulo){
       const limite = 100;
       if(this.validarCadena('Titulo',titulo)){
           if(titulo.length > limite){
               console.error(`"${titulo}" sobrepasa los ${limite} caracteres.`);
               return null;
           }else{
               return titulo;
           }
       }else{return null;}
   }
   validarDirector(director){
       const limite = 50;
       if(this.validarCadena('Director',director)){
            if(director.length > limite){
                console.error(`"${director}" sobrepasa los ${limite} caracteres.`);
                return null;
            }else{
                return director;
            }
        }else{return null;}
    }
    validarEstreno(estreno){ /*if(!isNaN(estreno) && estreno.toString().length == 4 && estreno > 0){return estreno;}else{console.error(`El numero ${estreno} tiene que: ser numerico, ser positivo y tener 4 digitos`); }*/
    /*consultar jon micrcha, sobre errorese en IsNan, y evaluaciones con expresiones regulares: segun StackOverflow si existen Anomalias. https://stackoverflow.com/questions/35048081/javascript-isnan-function-not-working
    if(!(/^([0-9]){4}/.test(estreno))){// no termina de evaluar si es cadena o no consultar jon mircha
        return console.error(`Estreno "${estreno}" no es valido, debe tener 4 caracteres y ser numerico`);
    }else{ return estreno; }*/
        
        if(typeof estreno === 'number' && estreno.toString().length == 4 && estreno > 0){
            return estreno;
        }else{          
            console.error(`El campo Estreno: "${estreno}", no es numerico, es negativo, o tiene mas de 4 digitos`);  
            return null;
        }
        
    }
    validarPaises(pais){
        let bandera = false;
        if(Array.isArray(pais)){
            for(let p of pais){
                if(this.validarCadena('Pais', p)){
                    bandera = true;
                }else{ bandera = false;}
            }
            if(bandera){
                return pais;
            }
        }else{
            console.error(`El campo ingresado, no es un arreglo`);
            return null;
        }
    }
    validarGenero(generos){
        let bandera = true;
        for(let genero of generos){
            if(Pelicula.GenerosAceptados.includes(genero)){
                bandera = true;
            }else{bandera = false;}
        }
        if(bandera){
            return generos;
        }else{
            return null;
        }
    }
    validarCalificacion(calificacion){
        if(typeof calificacion === 'number' && (calificacion >= 0 && calificacion <= 10)){
            calificacion = calificacion.toFixed(1);
            return calificacion;
        }else{
            console.error(`El valor "${calificacion}", tiene que ser numerico, con una sola coma decimal, y estar comprendido su parte entera entre 0 y 10,`);
            return null;
        }
    }
}

//console.log(Pelicula.GenerosAceptados);
let peliculas = [
{
    id: 'tt1234566',
    titulo: 'Cazafantasmas',
    director: 'Fantasma',
    estreno: 199,
    pais: ['Estados Unidos', 'Canada'],
    generos: ['Comedia'],
    calificacion: '7'
},{
    id: 'tt1234555',
    titulo: 'El dia de la independencia',
    director: 'Patrick Jones',
    estreno: '1998',
    pais: ['Estados Unidos'],
    generos: ['Comedia', 'Aviones'],
    calificacion: 7
},{
    id: 'tt1234567',
    titulo: 'el senior de la noche',
    director: 'Tim Burton',
    estreno: 1998,
    pais: ['Argentina', 'Mexico'],
    generos: ['Comedia', 'Drama'],
    calificacion: 7
}];

peliculas.forEach(e=>{
    let pelicula = new Pelicula(e);
    console.log(pelicula);
})

/*const batman = new Pelicula({ //0123vUHGzefZygyb1Mspc3Hpjmf2PdZURq4567890123456789
    id: 'tt1234567',
    titulo: 'el senior de la noche',
    director: 'Tim Burton',
    estreno: 1998,
    pais: ['Argentina', 'Mexico'],
    generos: ['Comedia', 'Drama'],
    calificacion: 7
});

console.log(batman.id, batman.titulo, batman.director, batman.estreno, batman.pais, batman.generos, batman.calificacion);*/
