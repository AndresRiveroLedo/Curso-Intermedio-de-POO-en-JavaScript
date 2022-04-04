# Curso-Intermedio-de-POO-en-JavaScript
Programación Orientada a Objetos

# 📒 v2 - Static: atributos y métodos estáticos en JavaScript

Hasta ahora habíamos aprendido que apara acceder a los métodos o atributos de una clase o prototipo teníamos que crear una instancia del prototipo(Objeto). Pero hay una forma de que podemos saltarnos tener que crear una instancia del prototipo para acceder a los métodos o atributos, esta es la forma Static.

Para crear atributos estáticos los cuales podamos acceder sin crear un objeto o una instancia de este prototipo, solo hay que agregar al atributo la palabra **static**.

## Métodos estáticos de Object

```
    const objetito = {
        name: "Carlitos",
        email: "carlitosmazzaroli@gmail.com",
        age: 16,
    }

    Object.keys()
```


+ `Object.keys()`: Nos devuelve una lista con todos los keys(nombres claves) de nuestro objeto objetito.

```
    Object.keys(objetito)
    // (3) ["name", "email", "age"]
```

+ Object.getOwnPropertyNames() :Hace prácticamente lo mismo que Object.keys con pequeñas diferencias DOCUMENTACION

```
    Object.getOwnPropertyNames(objetito)
    // (3) ["name", "email", "age"]
```


+ `Object.entries()`: El método entries nos devolverá un arrays de arrays donde tendremos nuestra palabra clave con su respectivo valor por cada propiedad del prototipo [key,  value]


```
    Object.entries(objetito)
    // [
    //     0: (2) ["name", "Carlitos"]
    //     1: (2) ["email", "carlitosmazzaroli@gmail.com"]
    //     2: (2) ["age", 16]
    // ]
```

+ `Object.getOwnPropertyDescriptors(objetito)`: Nos devuelve todas las propiedades de los objetos, con sus keys y values, y otros atributos. Los atributos writable, configurable y enumerable es la forma que tiene JavaScript para limitar el acceso modificar o modificación de nuestros atributos o de nuestros objetos.

```
    Object.getOwnPropertyDescriptors(objetito) 
    // {
    //     age:{
    //         configurable: true
    //         enumerable: true
    //         value: 16
    //         writable: true
    //     }
    //     email:{
    //         configurable: true
    //         enumerable: true
    //         value: "carlitosmazzaroli@gmail.com"
    //         writable: true
    //     }
    //     name:{
    //         configurable: true
    //         enumerable: true
    //         value: "Carlitos"
    //     }
    // }
```

Los métodos estáticos son llamados sin instanciar su clase. Son habitualmente utilizados para crear funciones para una aplicación.

+ Para acceder a una propiedad ya sea atributo o método de una clase sin necesidad de producir una instancia, la misma se puede crear campos estáticos.

```
    class Patito {
        static sonidito = "cuack!";

        static hacerSonidito(){
            return "cuak!";
        }
    }

    console.log(Patito.sonidito)
    // cuak!
    console.log(Patito.hacerSonidito())
    // cuak!
```

Para poder crear campos estáticos solo debemos usar la palabra reservada `static`.


+ 🍳 Uso en el prototipo madre Object
    + El prototipo Object cuenta con diferentes métodos estáticos que nos ayudan con el manejo de objetos.

```
    const obj = {
        name: "Fernando",
        email: "fer@undefined.com",
        age: 19
    };

    Object.keys(obj);
    // ["name", "email", "age"]

    Object.getOwnPropertyNames(obj);
    // ["name", "email", "age"]

    Object.entries(obj);
    /* [
            0: ["name", "Fernando"],
            1: ["mail", "fer@undefined.com"],
            2: ["age", 19]
    */

    Object.getOwnPropertyDescriptors(obj);
    /*
    name: {
        configurable: true
        enumerable: true
        value: "Fernando"
        writable: true
    }
    */
``` 

+ `Object.keys y Object.getOwnPropertyNames` ⇒ Devuelve un array con los nombres llave del objeto mandado.
+ `Object.entries` ⇒ Devuelve un array bidimensional en cada elemento contiene la llave y el valor de cada propiedad del objeto.
+ `Object.getOwnPropertyDescriptors` ⇒ Devuelve un objeto con todas las propiedades del objeto inicial, dentro de este resultado se encuentran otros objetos especificando cada llave del objeto original.
    + Dentro de estos objetos se encuentran propiedades los cuales JavaScript usa para limitar el acceso y la modificación de nuestros objetos.

## Encapsulamiento

Si recordamos del curso anterior, el objetivo del encapsulamiento es limitiar quien puede modificar, acceder o ejecutar nuestros metodos o atributos de la clase o prototipo. Ahora con las propiedades writable configurable enumerable podemos limitar quien tiene acceso, modificar nuestros objetos.

## ¿En donde puedo prácticar POO en JS?

Hola, si deseas practicar y profundizar te recomendaría el Curso de estructuras de datos con js, o sino puedes intentar simular ciertos sistemas, por ejemplo un sistema de platzi, creas una clase llamada curso, que tiene un profesor, el cual es de una clase llamada profesor, y así.

## Por qué la forma de referirse a estos metodos es “static”? siempre tuve esa duda. No relaciono del todo que el metodo se denomine estatico con que no deba instanciarse un objeto para utilizarlo

Hay varias razones:

1️⃣ Por contexto histórico y herencia de los lenguajes predecesores a JavaScript.

2️⃣ Por no cambiar. Al NO estar relacionados con las instancias, estos métodos no cambiarán en el futuro para adecuarse a cada instancia, sino que se quedarán igual sin importar desde dónde los usemos.

📌 **RESUMEN:** Un valor estático dentro de una clase, te permite acceder al mismo sin instancia dicha clase. El prototipo `Object` contiene una gran variedad de métodos estáticos que nos permiten la manipulación de objetos.

# 📒 v3 - Métodos estáticos del prototipo Object

### Tenemos lo pilares: Abstracción - Herencia - Encapsulamiento - Polimorfísmo

En el encapsulamiento encontramos la forma de cómo se accede y mirar, ejecutar, usar las propiedades del objeto. Con getOwnPropertyDescriptors podemos modificar las propiedades para limitar el acceso y modificación de nuestros objetos

+ `Object.entries()` cambia la referencia de this: el objeto que ejecuta este método, tiene cómo salida un array. Por consiguiente, this cambia su referencia a este array. Esto se debe tener en cuenta cuando trabajamos con más funciones.
    + Listar las diferentes propiedades del super prototipo Object se puede lograr con estos métodos. 
    + La más interesante es getOwnPropertyDescriptors, nos permite ver diferentes atributos de los objetos para crear y modificar sus propiedades.

+ `Object.defineProperty()` : El método estático Object.defineProperty() define una nueva propiedad sobre un objeto, o modifica una ya existente, y devuelve el objeto modificado.

Sintaxis
Object.defineProperty(obj, prop, descriptor)

Parámetros
obj: El objeto sobre el cual se define la propiedad.

prop: El nombre de la propiedad a ser definida o modificada.

descriptor: El descriptor de la propiedad que está siendo definida o modificada