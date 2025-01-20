import React from 'react';
import { ArrowRight, Shield, Clock, Award, Car, Headphones, CreditCard, MapPin, Phone, Mail, GaugeCircle, CalendarDays, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';
import vid3 from './vid1.mp4'
import evoque from "./assets/evoque.jpg";
import img208 from "./assets/208.jpeg";
import touareg from "./assets/touareg.jpg";
const features = [
  {
    icon: Shield,
    title: 'Entièrement Assuré',
    description: 'Tous nos véhicules sont couverts par une assurance tous risques pour votre tranquillité d\'esprit.'
  },
  {
    icon: Clock,
    title: 'Assistance 24h/24 et 7j/7',
    description: 'Un support client disponible à tout moment pour vous aider dès que vous en avez besoin.'
  },
  {
    icon: Award,
    title: 'Flotte Premium',
    description: 'Une sélection soigneusement choisie de véhicules de luxe et haut de gamme pour une expérience de conduite exceptionnelle.'
  },
  {
    icon: Car,
    title: 'Livraison partout au Maroc',
    description: 'Service de livraison et de récupération partout au Maroc.'
  },
  {
    icon: Headphones,
    title: 'Service Expert',
    description: 'Un personnel professionnel et accueillant pour garantir une expérience de location sans accroc.'
  },
  {
    icon: CreditCard,
    title: 'Meilleur Prix Garanti',
    description: 'Profitez des tarifs les plus compétitifs et d\'offres avantageuses pour toutes vos locations.'
  }
];

const featuredCars = [
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
    }}
];

export default function Home() {
  return (
      <div className="min-h-screen">
        <div className="relative h-screen">
          <video
              autoPlay
              loop
              muted
            playsInline
              className="absolute inset-0 w-full h-full object-cover"
              src={vid3}
          />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              F.CHAR RENT CAR
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Découvrez une large gamme de véhicules adaptés à tous vos besoins  </p>
            <Link
              to="/cars"
              className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-all duration-300"
            >
              Découvrez nos véhicules
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white/10 dark:bg-black/10 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi Nous Choisir</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white/5 dark:bg-black/5 backdrop-blur-lg border border-gray-200 dark:border-gray-800"
              >
                <feature.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4">Véhicules en Vedette</h2>
             <p className="text-center text-gray-600 dark:text-gray-400 mb-12">Vivez l'apogée de l'excellence automobile <Link
                to="/cars"
                className=" text-primary  "
            >
              Voir plus

            </Link></p>


          <div className="grid md:grid-cols-3 gap-8">
            {featuredCars.map((car, index) => (
              <div
                key={index}
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
      </section>

      <section className="py-20 bg-white/10 dark:bg-black/10 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Visitez nous</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden">
              <iframe
                title="Company Location"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Mediouna+(F.CHAR%20RENT%20CAR)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                className="w-full h-96 border-0"
                loading="lazy"
              ></iframe>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Casablanca<br />
                    Mediouna<br />
                    Maroc
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-400">+212 777-541617</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">f.char.rentcar@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
