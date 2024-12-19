//your JS code here. If required.
function Student(name){
	this.name = name
}

const student = new Student("ruchi");
// const student = new Student(name)
student.getKeys = function(){
	return Object.getOwnPropertyNames(student)
// Object.getOwnPropertyNames(Student.prototype)
}

// console.log(student.getKeys())
student.getKeys()