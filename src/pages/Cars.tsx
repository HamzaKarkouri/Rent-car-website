import React, { useState } from 'react';
import { Search, GaugeCircle, CalendarDays, Gauge } from 'lucide-react';
import img208 from './assets/208.jpeg';
import img2008 from './assets/2008.jpg';
import accent from './assets/accent.jpg';
import c5 from './assets/c5.jpg';
import clio4 from './assets/clio4.jpg';
import clio5 from './assets/clio5.jpg';
import creta from './assets/creta.jpg';
import cupra from './assets/cupra.jpg';
import duster from './assets/duster.jpg';
import evoque from './assets/evoque.jpg';
import fiat from './assets/fiat.jpg';
import i30 from './assets/i30.jpg';
import logan from './assets/logan.jpg';
import sandero from './assets/sandero.jpg';
import sportage from './assets/sportage.jpg';
import touareg from './assets/touareg.jpg';
import troc from './assets/troc.jpg';
import tucson from './assets/tucson.jpg';

const cars = [
  {
    id: 1,
    name: 'Range Rover Evoque',
    category: 'SUV',
    price: 280,
    image: evoque,
    specs: {
      power: '246 hp',
      year: '2023',
      speed: '135 mph'
    }
  },
  {
    id: 2,
    name: 'Peugeot 208',
    category: 'Hatchback',
    price: 150,
    image: img208,
    specs: {
      power: '100 hp',
      year: '2023',
      speed: '120 mph'
    }
  },
  {
    id: 3,
    name: 'VW Touareg',
    category: 'SUV',
    price: 300,
    image: touareg,
    specs: {
      power: '335 hp',
      year: '2023',
      speed: '155 mph'
    }
  },
  {
    id: 4,
    name: 'Hyundai Accent',
    category: 'Sedan',
    price: 120,
    image: accent,
    specs: {
      power: '120 hp',
      year: '2023',
      speed: '120 mph'
    }
  },
  {
    id: 5,
    name: 'Dacia Sandero',
    category: 'Hatchback',
    price: 110,
    image: sandero,
    specs: {
      power: '90 hp',
      year: '2023',
      speed: '104 mph'
    }
  },
  {
    id: 6,
    name: 'Hyundai Tucson',
    category: 'SUV',
    price: 220,
    image: tucson,
    specs: {
      power: '187 hp',
      year: '2023',
      speed: '130 mph'
    }
  },
  {
    id: 7,
    name: 'Fiat 500',
    category: 'City Car',
    price: 90,
    image: fiat,
    specs: {
      power: '70 hp',
      year: '2023',
      speed: '99 mph'
    }
  },
  {
    id: 8,
    name: 'Clio 4',
    category: 'Hatchback',
    price: 120,
    image: clio4,
    specs: {
      power: '90 hp',
      year: '2023',
      speed: '109 mph'
    }
  },
  {
    id: 9,
    name: 'Dacia Duster',
    category: 'SUV',
    price: 150,
    image: duster,
    specs: {
      power: '115 hp',
      year: '2023',
      speed: '106 mph'
    }
  },
  {
    id: 10,
    name: 'Clio 5',
    category: 'Hatchback',
    price: 130,
    image: clio5,
    specs: {
      power: '130 hp',
      year: '2023',
      speed: '120 mph'
    }
  },
  {
    id: 11,
    name: 'Dacia Logan',
    category: 'Sedan',
    price: 110,
    image: logan,
    specs: {
      power: '90 hp',
      year: '2023',
      speed: '105 mph'
    }
  },
  {
    id: 12,
    name: 'Hyundai Creta',
    category: 'SUV',
    price: 180,
    image: creta,
    specs: {
      power: '115 hp',
      year: '2023',
      speed: '110 mph'
    }
  },
  {
    id: 13,
    name: 'Hyundai i30',
    category: 'Hatchback',
    price: 140,
    image: i30,
    specs: {
      power: '150 hp',
      year: '2022',
      speed: '118 mph'
    }
  },
  {
    id: 14,
    name: 'Volkswagen T-Roc',
    category: 'SUV',
    price: 200,
    image: troc,
    specs: {
      power: '190 hp',
      year: '2023',
      speed: '128 mph'
    }
  },
  {
    id: 15,
    name: 'KIA Sportage',
    category: 'SUV',
    price: 210,
    image: sportage,
    specs: {
      power: '187 hp',
      year: '2023',
      speed: '125 mph'
    }
  },
  {
    id: 16,
    name: 'CUPRA Formentor',
    category: 'SUV',
    price: 280,
    image: cupra,
    specs: {
      power: '306 hp',
      year: '2023',
      speed: '155 mph'
    }
  },
  {
    id: 17,
    name: 'Peugeot 2008',
    category: 'SUV',
    price: 160,
    image: img2008,
    specs: {
      power: '130 hp',
      year: '2023',
      speed: '122 mph'
    }
  },
  {
    id: 18,
    name: 'Citroën C5',
    category: 'Sedan',
    price: 240,
    image: c5,
    specs: {
      power: '180 hp',
      year: '2023',
      speed: '143 mph'
    }
  }
];


export default function Cars() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCars = cars.filter(car =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">Nos véhicules</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search cars..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-lg bg-white/5 dark:bg-black/5 backdrop-blur-lg border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map(car => (
            <div
              key={car.id}
              className="group relative rounded-xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 dark:from-black/10 dark:to-black/5 backdrop-blur-lg border border-gray-200/50 dark:border-gray-800/50 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <h3 className="text-2xl font-bold text-white mb-1">{car.name}</h3>
                  <p className="text-gray-200 text-sm">{car.category}</p>
                </div>
              </div>
              <div className="p-6">

                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center p-2 rounded-lg bg-white/5 dark:bg-black/5">
                    <GaugeCircle className="h-5 w-5 text-primary mb-1" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">Power</span>
                    <span className="text-sm font-semibold">{car.specs.power}</span>
                  </div>
                  <div className="flex flex-col items-center p-2 rounded-lg bg-white/5 dark:bg-black/5">
                    <CalendarDays className="h-5 w-5 text-primary mb-1" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">Year</span>
                    <span className="text-sm font-semibold">{car.specs.year}</span>
                  </div>
                  <div className="flex flex-col items-center p-2 rounded-lg bg-white/5 dark:bg-black/5">
                    <Gauge className="h-5 w-5 text-primary mb-1" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">Speed</span>
                    <span className="text-sm font-semibold">{car.specs.speed}</span>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-sm font-medium z-20">
                {car.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}