//your JS code here. If required.


const student = {
	name: "ruchi"
}
Object.prototype.getKeys = function(){
	return Object.keys(this)
}
console.log(student.getKeys());




































// // constructor
// function Student(name){
// 	this.name = name
// }


// // adding new key to the constructor via prototype
// Student.prototype.getKeys = function(){
// 	return Object.getOwnPropertyNames(student)
// // Object.getOwnPropertyNames(Student.prototype)
// }

// // Object = instance of class student
// const student = new Student("ruchi");
// // const student = new Student(name)

// // console.log(student.getKeys())
// student.getKeys()