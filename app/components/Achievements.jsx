"use client"
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => {return import("react-animated-numbers")}, {ssr: false})

const Achievements = () => {
  const achievementsList = [
    {
      metric: "Projects",
      value: "8+",
      postfix: "+"
    },
    {
      prefix: "~",
      metric: "Users",
      value: "1M+",
    },
    {
      metric: "Awards",
      value: "0",
    },
    {
      metric: "Years",
      value: "1",
    },
  ];
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-row grow items-center justify-between  ">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(achievement.value)}
                locale = "en-US"
                configs={(_, index) => {
                  return{
                    mass:1,
                    friction:100,
                    tensions:170 * (index +1)
                  }
                }}
                />
                 {achievement.postfix}
              </h2>
              <p className="text-[#ADBBE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Achievements;
