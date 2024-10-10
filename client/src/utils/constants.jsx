import { FaUserCircle, FaCar, FaMapMarkedAlt } from 'react-icons/fa'
import { FaGear } from 'react-icons/fa6'
import { RxGear, RxExit, RxEnter } from 'react-icons/rx'
import { IoMdKey } from 'react-icons/io'
import Audi from '../assets/Audi.png'
import BMW from '../assets/BMW.png'
import Citroen from '../assets/Citroen.png'
import Default from '../assets/Default.png'
import Fiat from '../assets/Fiat.png'
import Ford from '../assets/Ford.png'
import Honda from '../assets/Honda.png'
import Hyundai from '../assets/Hyundai.png'
import Jaguar from '../assets/Jaguar.png'
import Jeep from '../assets/Jeep.png'
import KIA from '../assets/KIA.png'
import Land_Rover from '../assets/Land_Rover.png'
import Lexus from '../assets/Lexus.png'
import Mazda from '../assets/Mazda.png'
import Mercedes_Benz from '../assets/Mercedes_Benz.png'
import Mini from '../assets/Mini.png'
import Nissan from '../assets/Nissan.png'
import Opel from '../assets/Opel.png'
import Peugeot from '../assets/Peugeot.png'
import Renault from '../assets/Renault.png'
import Seat from '../assets/Seat.png'
import Skoda from '../assets/Skoda.png'
import Tesla from '../assets/Tesla.png'
import Toyota from '../assets/Toyota.png'
import Volkswagen from '../assets/Volkswagen.png'

export const VEHICLE_BRAND = {
  POR_DEFECTO: { name: 'Por Defecto', icon: Default },
  AUDI: { name: 'Audi', icon: Audi },
  BMW: { name: 'BMW', icon: BMW },
  CITROEN: { name: 'Citroen', icon: Citroen },
  FIAT: { name: 'Fiat', icon: Fiat },
  FORD: { name: 'Ford', icon: Ford },
  HONDA: { name: 'Honda', icon: Honda },
  HYUNDAI: { name: 'Hyundai', icon: Hyundai },
  JAGUAR: { name: 'Jaguar', icon: Jaguar },
  JEEP: { name: 'Jeep', icon: Jeep },
  KIA: { name: 'Kia', icon: KIA },
  LAND_ROVER: { name: 'Land Rover', icon: Land_Rover },
  LEXUS: { name: 'Lexus', icon: Lexus },
  MAZDA: { name: 'Mazda', icon: Mazda },
  MERCEDES_BENZ: { name: 'Mercedes Benz', icon: Mercedes_Benz },
  MINI: { name: 'Mini', icon: Mini },
  NISSAN: { name: 'Nissan', icon: Nissan },
  OPEL: { name: 'Opel', icon: Opel },
  PEUGEOT: { name: 'Peugeot', icon: Peugeot },
  RANGE_ROVER: { name: 'Range Rover', icon: Land_Rover },
  RENAULT: { name: 'Renault', icon: Renault },
  SEAT: { name: 'Seat', icon: Seat },
  SKODA: { name: 'Skoda', icon: Skoda },
  TESLA: { name: 'Tesla', icon: Tesla },
  TOYOTA: { name: 'Toyota', icon: Toyota },
  VOLKSWAGEN: { name: 'Volkswagen', icon: Volkswagen },
}

export const links = [
  {
    id: 1,
    label: 'Usuario',
    url: '/dashboard/user',
    icon: FaUserCircle,
  },
  {
    id: 2,
    label: 'Vehículos',
    url: '/dashboard/vehicles',
    icon: FaCar,
  },
  {
    id: 3,
    label: 'Zonas',
    url: '/dashboard/zones',
    icon: FaMapMarkedAlt,
  },
  {
    id: 4,
    label: 'Ajustes',
    url: '/dashboard/settings',
    icon: FaGear,
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
