function Programmer(name,language){
    console.log(this);
    this.name = name;
    this.language = language;
    console.log(this);
     
}
Programmer.prototype.doCoding = function (){
    return `${this.name} is coding in ${this.language}`;
}

const BhuviProgrammer = new Programmer("Bhuvi",Javascript)