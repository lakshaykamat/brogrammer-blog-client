import React from "react";
import { Suspense } from "react";
import TeamSkeleton from "./components/TeamSkeleton";
import ProfileCard from "./components/ProfileCard";
const Team = () => {
  const team = [
    {
      _id: "648f160bbb85e0822ac70adf",
      name: "Lakshay",
      email: "lakshaykamat2048@gmail.com",
      designation: "Back-end Dev",
      bio: "memento mori",
      image:
        "https://i.pinimg.com/564x/49/f6/f9/49f6f973b460c25adff30892d78ddc2f.jpg",
      password: "$2a$10$p5SwT6bU11Smknadxqww3ualQkri7frC3bVg.YAkZqeORM36O8Myq",
      date: "2023-06-18T14:34:51.122Z",
      __v: 0,
    },
    {
      _id: "648f1692bb85e0822ac70ae5",
      name: "Shikha",
      email: "shikhasingh7468@gmail.com",
      designation: "Front-end Dev",
      bio: "Psycho girl",
      image:
        "https://i.postimg.cc/J7K1JrH9/Whats-App-Image-2023-06-08-at-21-26-14.jpg",
      password: "$2a$10$14a6V7hLUtlohOjWUtbfgusCIcfA1l6/D5VUhgqXcLzyBbpOxoMMm",
      date: "2023-06-18T14:37:06.981Z",
      __v: 0,
    },
  ];
  return (
    <section className="body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-20 text-center">
          <h1 className="mb-4 text-2xl font-bold tracking-widest dark:text-gray-200 title-font">
            OUR TEAM
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3 dark:text-gray-300">
            At the heart of our projects success lies our exceptional tech team.
            Comprised of talented individuals with a shared passion for
            technology and innovation, our team is dedicated to delivering
            top-notch solutions and driving the project forward. With their
            expertise, creativity, and collaborative spirit, they ensure that
            our project stands out from the rest.
          </p>
        </div>
        <div className="flex flex-col items-center justify-around m-auto lg:flex-row sm:items-start">
          {team.map((item, index) => {
            return (
              // <Suspense key={index} fallback={<TeamSkeleton />}>
                <ProfileCard
                key={item._id}
                  name={item.name}
                  bio={item.bio}
                  designation={item.designation}
                  pfp={item.image}
                />
              // </Suspense>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
