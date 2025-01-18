import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { icon } from "@fortawesome/fontawesome-svg-core";
import {
  faAddressBook,
  faBriefcase,
  faBuilding,
  faBus,
  faCloudSun,
  faFootballBall,
  faHospital,
  faLocation,
  faMapLocation,
  faMedkit,
  faPalette,
  faSchool,
  faShoppingCart,
  faUniversity,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

export const products = [
  {
    title: "Pharmacies de Garde",
    link: "/api/pharmacies",
    thumbnail: "/pharmacy.svg",
    icon: faMedkit,
  },
  {
    title: "Wilayas",
    link: "/api/wilayas",
    thumbnail: "/wilaya.svg",
    icon: faMapLocation,
  },
  {
    title: "Codes Postaux",
    link: "/api/codes-postaux",
    thumbnail: "/postal-code.svg",
    icon: faLocation,
  },
  {
    title: "Communes",
    link: "/api/communes",
    thumbnail: "/commune.svg",
    icon: faAddressBook,
  },
  {
    title: "Hôpitaux",
    link: "/api/hopitaux",
    thumbnail: "/hospital.svg",
    icon: faHospital,
  },
  {
    title: "Universités",
    link: "/api/universites",
    thumbnail: "/university.svg",
    icon: faSchool,
  },
  {
    title: "Restaurants",
    link: "/api/restaurants",
    thumbnail: "/restaurant.svg",
    icon: faUtensils,
  },
  {
    title: "Banques",
    link: "/api/banques",
    thumbnail: "/bank.svg",
    icon: faUniversity,
  },
  {
    title: "Administrations",
    link: "/api/administrations",
    thumbnail: "/administration.svg",
    icon: faBuilding,
  },
  {
    title: "Transport",
    link: "/api/transport",
    thumbnail: "/transport.svg",
    icon: faBus,
  },
  {
    title: "Météo",
    link: "/api/meteo",
    thumbnail: "/weather.svg",
    icon: faCloudSun,
  },
  {
    title: "Entreprises",
    link: "/api/entreprises",
    thumbnail: "/enterprise.svg",
    icon: faBriefcase,
  },
  {
    title: "Marchés",
    link: "/api/marches",
    thumbnail: "/market.svg",
    icon: faShoppingCart,
  },
  {
    title: "Sports",
    link: "/api/sports",
    thumbnail: "/sports.svg",
    icon: faFootballBall,
  },
  {
    title: "Culture",
    link: "/api/culture",
    thumbnail: "/culture.svg",
    icon: faPalette,
  },
];

export function HeroParallaxDemo() {
  return (
    <div className="min-h-screen w-full ">
      <div className="absolute top-0 left-0 w-full ">
        <HeroParallax products={products} />
      </div>
    </div>
  );
}
