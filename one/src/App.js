import logo from './logo.svg';
import './App.css';

class Car{
  constructor (name){
    this.brand = name;
  }
}

const mycar=new Car("Ford");
document.write(mycar.brand);

export default App;
