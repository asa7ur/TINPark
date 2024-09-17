import { FaUserCircle, FaCar, FaRegMap, FaBars } from 'react-icons/fa'
import { RxGear, RxExit, RxEnter } from 'react-icons/rx'
import { IoMdKey } from 'react-icons/io'
import icon_1 from '../assets/MercedesBenz.png'
import icon_2 from '../assets/BMW.png'
import icon_3 from '../assets/Peugeot.png'
import icon_4 from '../assets/Audi.png'

export const links = [
  {
    id: 1,
    icon: FaUserCircle,
    label: 'Usuario',
    url: '/usuario',
  },
  {
    id: 2,
    icon: FaCar,
    label: 'Vehículos',
    url: '/misvehiculos',
  },
  {
    id: 3,
    icon: FaRegMap,
    label: 'Zonas',
    url: '/zonas',
  },
  {
    id: 4,
    icon: FaBars,
    label: 'Ajustes',
    url: '/ajustes',
  },
]

export const vehicles = [
  {
    id: 1,
    name: 'Coche 1',
    plate: '1234ABC',
    parked: 'Plaza Virgen de la Amargura',
    icon: icon_1,
    alt_name: 'Mercedes Benz',
  },
  {
    id: 2,
    name: 'Coche 2',
    plate: '5678DEF',
    parked: '',
    icon: icon_2,
    alt_name: 'BMW',
  },
  {
    id: 3,
    name: 'Coche 3',
    plate: '9123GHI',
    parked: 'Plaza de Armas',
    icon: icon_3,
    alt_name: 'Peugeot',
  },
  {
    id: 4,
    name: 'Coche 4',
    plate: '4567JKL',
    parked: 'Viapol',
    icon: icon_4,
    alt_name: 'Audi',
  },
]

export const zones = [
  {
    id: 1,
    name: 'Plaza Virgen de la Amargura',
    car: 'Coche 1',
    free_space: 0,
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.0734916935326!2d-6.012024824622136!3d37.388094234340954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c6dda1d2473%3A0x5e656ecba7a27575!2sPl.%20Virgen%20de%20la%20Amargura%2C%2041010%20Sevilla!5e0!3m2!1sen!2ses!4v1726048285970!5m2!1sen!2ses',
  },
  {
    id: 2,
    name: 'Plaza de Armas',
    car: '',
    free_space: 8,
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6339.83256520943!2d-6.006828617714821!3d37.39181206216644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c0d819441a9%3A0xa8f92363205af035!2sParking%20Saba%20Plaza%20de%20Armas!5e0!3m2!1sen!2ses!4v1726048326484!5m2!1sen!2ses',
  },
  {
    id: 3,
    name: 'Viapol',
    car: 'Coche 3',
    free_space: 12,
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.601678677822!2d-5.977500602918619!3d37.37560086097401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126f4946f42a5f%3A0xdf78d8e2f789d429!2sParking%20Viapol%20Center%20Sevilla!5e0!3m2!1sen!2ses!4v1726047861489!5m2!1sen!2ses',
  },
]

export const inside = [
  {
    id: 1,
    icon: RxGear,
    text: 'Corregir el estado',
  },
  {
    id: 2,
    icon: RxExit,
    text: 'Salir por Principal',
  },
  {
    id: 3,
    icon: RxExit,
    text: 'Salir por Callejón',
  },
]

export const outside = [
  {
    id: 1,
    icon: RxGear,
    text: 'Corregir el estado',
  },
  {
    id: 2,
    icon: RxEnter,
    text: 'Entrar por Principal',
  },
  {
    id: 3,
    icon: IoMdKey,
    text: 'Autorizar otra matrícula',
  },
]
