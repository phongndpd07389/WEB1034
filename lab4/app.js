class Student{
    constructor(id, first_name, last_name, class_id, email, phone_number, dob){
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.class_id = class_id;
        this.email = email;
        this.phone_number = phone_number;
        this.dob = dob;
    }
    getFullName(){
        let fullName = this.last_name + " " + this.first_name;
        return fullName;
    }
    getAge(){
        const date = new Date();
        let age =  date.getFullYear() - this.dob.getFullYear();
        const monthDiff = date.getMonth() - this.dob.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && date.getDate() < this.dob.getDate())){
            age--;
        }
        return age;
    }
    getAgeInDays() {
        const oneDay = 24 * 60 * 60 * 1000;
        const date = new Date();
        const diffDays = (int)(Math.abs((this.dob.getTime() - date.getTime()) / oneDay));
        return diffDays;
      }
}
let studenList = [
    s1 = new Student(1, 'Phong', 'Ngo', '18301', 'phong@gmail.com', 113, '01-01-2000'),
    s2 = new Student(2, 'Hihi', 'Haha', '18301', 'hihi@gmail.com', 114, '02-02-2000'),
    s3 = new Student(3, 'Anh', 'Phan', '18301', 'hihi@gmail.com', 115, '03-03-2000'),
    s4 = new Student(4, 'Thai', 'Dinh', '18301', 'hihi@gmail.com', 116, '04-04-2000'),
    s5 = new Student(5, 'Sim', 'Ple', '18301', 'hihi@gmail.com', 117, '05-05-2000'),
]
studenList.sort(getAgeInDays(a, b))