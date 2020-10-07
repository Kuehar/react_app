class Human{
    gender = 'male';

    printGender = () =>{
        console.log(this.sex);
    }
}

class Person extends Human{
        name = 'Mike';
        gender = 'female';
    }

    printName = () =>{
        console.log(this.name);
    }

const sample = new Person();
sample.printName();
sample.printGender();