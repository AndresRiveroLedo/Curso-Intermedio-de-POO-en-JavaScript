const juan = {
    name: "Juanito",
    age: 18,
    approvedCourses: ["Curso 1"],
    addCourse(newCourse){
        //console.log("This", this);
        //console.log("approvedCourses", this.approvedCourses)
        this.approvedCourses.push(newCourse);
    }
};


//console.log("Object.entries",Object.entries(juan)[3][1]("Curso 2"));
console.log(Object.getOwnPropertyDescriptors(juan))

Object.defineProperty(juan, "pruebaMasa",{
    value: "extrarrestre",
    enumerable: true,
    writable: true,
    configurable: true
})