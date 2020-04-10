class List{
    constructor(){
        this.data = [];
    }

    add(item){
        this.data.push(item);
    }

    getElements(){
        return this.data;
    }

    getElemenTimes(){
        const newdata = this.data.map((item,index) => item * index)

        return newdata;
    }

    sumValues(){
        const sum = this.data.reduce((total,next)=>{
            return total + next;
        });

        return sum;
    }

    getElementPart(){
        const filter = this.data.filter((item) => {
            return item % 2 === 0;
        });

        return filter;
    }
}

class TodoList extends List{
    constructor(user){
        super();
        this.usuario = user;
    }

    getUser(){
        console.log(this.usuario);
    }
   
}

const mylist = new TodoList('Erikson');
mylist.add(1);
mylist.add(10);
mylist.add(5);
mylist.add(0);
mylist.add(8);

document.getElementById('newbtn').onclick = () => {
    console.log(mylist.getElemenTimes());
}

//Desestruturaçao

const usuario = {
    nome:'erikson',
    idade: 23,
    endereco:{
        cidade: 'Santa Mariana',
        estado: 'Parana',
        pais: 'Brasil'
    },
};

const {nome, idade, endereco: {cidade}} = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);


//Operadore rest ...val

const usuario2 = {
    nome2:'erikson',
    idade2: 23,
    endereco2:{
        cidade2: 'Santa Mariana',
        estado2: 'Parana',
        pais2: 'Brasil'
    },
};

const { nome2, ...resto } = usuario2;

console.log(nome2);
console.log(resto); 


const arr = [1,2,3,4];

const [a, b, ...c] = arr;

console.log(c);

//Operadores spread

const arr1 = [1,2,3,4];
const arr2 = [5,6,7,8];

const arr3 = [ ...arr1, ...arr2];

console.log(arr3);