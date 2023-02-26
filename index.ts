// Import stylesheets
import './style.css';

interface IStudent {
  name: string;
  email: string;
  phone: string;
  carrer: string;
  account: string;
  profession: string;
}

const student: IStudent = {
  name: 'Isaac Suazo',
  email: 'isaacsuazo7@unitec.edu',
  phone: '+50498254563',
  carrer: 'Ingeniería en Informática',
  account: '61811523',
  profession: 'Estudiante',
};

const nameLabel: HTMLElement = document.getElementById('name');
nameLabel.innerHTML = `${student.name}`;

const professionLabel: HTMLElement = document.getElementById('profession');
professionLabel.innerHTML = `${student.profession}`;

const emailLabel: HTMLElement = document.getElementById('email');
emailLabel.innerHTML = `${student.email}`;

const phoneLabel: HTMLElement = document.getElementById('phone');
phoneLabel.innerHTML = `${student.phone}`;

const carrerLabel: HTMLElement = document.getElementById('carrer');
carrerLabel.innerHTML = `${student.carrer}`;

const accountLabel: HTMLElement = document.getElementById('account');
accountLabel.innerHTML = `${student.account}`;
