export type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
  }

  export const project: Project[]  = [
    {
      id: 1,
      title: "ReNoise",
      description:
        "ReNoise is an interactive web application that I have designed to offer users an immersive experience with the soothing sounds of nature. This is a full-stack project, developed using modern web technologies and frameworks, ensuring a pleasant and intuitive user experience. In ReNoise, users have the capability to register and log into their accounts, providing a personalized experience.",
      image: "/projects/renoise1.png",
      tags: ["NEXT.JS", "CSS", "TYPESCRIPT", "HTML"],
      link: "http://link_to_renoise"
    },
    {
      id: 2,
      title: "Car Rental Marketplace",
      description:
        "The MERN Stack Car Rental Marketplace is a dynamic web application designed to facilitate the seamless sharing of cars among users. This project showcases my proficiency in utilizing the MERN (MongoDB, Express.js, React, and Node.js) technology stack to create a user-friendly and efficient solution for car rental and sharing.",
      image: "/projects/renoise.png",
      tags: ["NEXT.JS", "CSS", "TYPESCRIPT", "HTML"],
      link: "http://link_to_car_rental"
    },
    {
        id: 3,
        title: "ReNoise",
        description:
          "ReNoise is an interactive web application that I have designed to offer users an immersive experience with the soothing sounds of nature. This is a full-stack project, developed using modern web technologies and frameworks, ensuring a pleasant and intuitive user experience. In ReNoise, users have the capability to register and log into their accounts, providing a personalized experience.",
        image: "/projects/renoise.png",
        tags: ["NEXT.JS", "CSS", "TYPESCRIPT", "HTML"],
        link: "http://link_to_renoise"
      },
      {
        id: 4,
        title: "Car Rental Marketplace",
        description:
          "The MERN Stack Car Rental Marketplace is a dynamic web application designed to facilitate the seamless sharing of cars among users. This project showcases my proficiency in utilizing the MERN (MongoDB, Express.js, React, and Node.js) technology stack to create a user-friendly and efficient solution for car rental and sharing.",
        image: "/projects/renoise.png",
        tags: ["NEXT.JS", "CSS", "TYPESCRIPT", "HTML"],
        link: "http://link_to_car_rental"
      },
    // Добавьте сюда другие проекты
  ];

  