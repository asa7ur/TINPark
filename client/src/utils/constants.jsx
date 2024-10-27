import { FaCar, FaRegEdit, FaMapMarkedAlt, FaHome } from 'react-icons/fa'
import { FaGear } from 'react-icons/fa6'
import { RxGear, RxExit, RxEnter } from 'react-icons/rx'
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
import Home_1 from '../assets/Home_1.png'
import Home_2 from '../assets/Home_2.png'

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

export const HomeVehicles = {
  Home_1: { name: 'Home_1', icon: Home_1 },
  Home_2: { name: 'Home_2', icon: Home_2 }
}

export const links = [
  {
    id: 1,
    label: 'Inicio',
    url: '/dashboard/homepage',
    icon: FaHome,
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

export const inside = [
  {
    id: 1,
    icon: RxExit,
    text: 'Salir por Principal',
  },
  {
    id: 2,
    icon: RxGear,
    text: 'Corregir el estado',
  },
  {
    id: 3,
    icon: FaRegEdit,
    text: 'Editar los datos',
  },
]

export const outside = [
  {
    id: 1,
    icon: RxEnter,
    text: 'Entrar por Principal',
  },
  {
    id: 2,
    icon: RxGear,
    text: 'Corregir el estado',
  },
  {
    id: 3,
    icon: FaRegEdit,
    text: 'Editar los datos',
  },
]
