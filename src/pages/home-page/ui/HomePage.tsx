import { map, randomEv, randomEvArrow } from "assets/images";
import React from "react";
import { Button } from "shared/ui/button";

export const HomePage = () => {
  return (
    <div>
      <img src={map} className="w-full h-[544px]" />
      <div className="sm:container sm:mx-auto">
        <div className="py-24 flex justify-between [text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.25)]">
          <div>
            <Button className="py-5 px-7 mb-10 rounded-20 bg-secondary-400 text-4xl hover:bg-secondary-600 [text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.25)]">
              Хто ми?
            </Button>
            <p className="text-xl pl-24 w-[930px] ">
              Гарт - проєкт, який об’єднує людей заради створення і
              насолоди творчістю. Творчих подій, івентів, заходів
              багато, але вони локалізовані, це проблема. Гарт знайде
              шлях від них до вас. Знайде шлях до вашого сер♡енька.
            </p>
          </div>
          <div>
            <img src={randomEv} alt="Фото випадкової події" />
            <div className="relative">
              <p className="text-xl text-right">Випадкова подія</p>
              <img
                src={randomEvArrow}
                alt="Your Image"
                className="absolute top-3 left-5"
              />
              <span className="text-right block text-[8px] mr-[-10px]">
                Або раз на мільйон фото мого діда
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
