const juan = {
    name: "Juanito",
    age: 18,
    approvedCourses: ["Curso 1"],
    addCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
};

console.log("Object.Keys => ", Object.keys(juan));
console.log("Object.getOwnPropertyNames =>",Object.getOwnPropertyNames(juan));
console.log("Object.entries",Object.entries(juan));
console.log("Object.entries",Object.entries(juan)[3]);
console.log("Object.entries",Object.entries(juan)[3][0]);
console.log("Object.entries",Object.entries(juan)[3][1]());