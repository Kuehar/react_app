class Human{
    constructor(){
        this.sex = 'male';
    }
    printGender(){
        console.log(this.sex);
    }
}

class Person extends Human{
    constructor(){
        super();
        this.name = 'Mike';
    }

    printName(){
        console.log(this.name);
    }
}

const sample = new Person();
sample.printName();
sample.printGender();