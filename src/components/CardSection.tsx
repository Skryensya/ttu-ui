import { Card } from "./Card";
import { CardProps } from "./Card";

const defaultCardProps: Partial<CardProps> = {
  image: {
    url: "https://dummyimage.com/600x400/eaeaea/0c0c0d.jpg",
    alt: "Default Image",
    title: "Default Title",
    width: 400,
    height: 300,
  },
  title: "Default Title",
  dateOfPublish: new Date(),
  tags: [],
  url: "#", // Ensuring url is always a string
  isExternalUrl: false, // Ensuring isExternalUrl is always a boolean
};

export const CardSection = () => {
  const cardData: CardProps[] = [
    {
      ...defaultCardProps,
      title:
        "Esta es la segunda noticia más importante con máximo tres líneas de texto",
      dateOfPublish: new Date("2020-04-20"),
      tags: [
        { label: "Migración", url: "#" },
        { label: "Sonido", url: "#" },
        { label: "Antropoceno", url: "#" },
        { label: "Mapping", url: "#" },
        { label: "GPS", url: "#" },
        { label: "Gerónimo Reyes Retana", url: "#" },
        { label: "...", url: "#" },
      ],
      url: "#",
      isExternalUrl: false,
    },
    {
      ...defaultCardProps,
      title: "Título de la Noticia",
      dateOfPublish: new Date("2020-04-20"),
      url: "#",
      isExternalUrl: false,
      tags: [
        { label: "Concepción", url: "#" },
        { label: "Sonido", url: "#" },
        { label: "Antropoceno", url: "#" },
        { label: "Mapping", url: "#" },
        { label: "GPS", url: "#" },
        { label: "Gerónimo Reyes Retana", url: "#" },
        { label: "...", url: "#" },
      ],
      image: {
        url: "https://dummyimage.com/600x600/eaeaea/0c0c0d.jpg",
        alt: "Default Image",
        title: "Default Title",
        width: 400,
        height: 300,
      },
    },
    {
      ...defaultCardProps,
      title: "La cuarta noticia más importante",
      dateOfPublish: new Date("2020-04-20"),
      tags: [
        { label: "Valdivia", url: "#" },
        { label: "Sonido", url: "#" },
        { label: "Antropoceno", url: "#" },
        { label: "Mapping", url: "#" },
        { label: "GPS", url: "#" },
        { label: "Gerónimo Reyes Retana", url: "#" },
        { label: "...", url: "#" },
      ],
      url: "#",
      isExternalUrl: false,
      image: {
        url: "https://dummyimage.com/600x450/eaeaea/0c0c0d.jpg",
        alt: "Default Image",
        title: "Default Title",
        width: 400,
        height: 300,
      },
    },
  ];

  return (
    <div className="grid grid-cols-12 gap-4 flex-wrap mt-12 w-full">
      {cardData.map((data, index) => (
        <div key={index} className="col-span-4">
          <Card {...data} />
        </div>
      ))}
    </div>
  );
};
