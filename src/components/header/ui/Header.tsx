import React from "react";
import { Button } from "shared/ui/button";
import { profileImage, themeIcon } from "assets/images";
import { Logo } from "shared/ui/logo";

export const Header = () => {
  return (
    <header className="bg-primary-400  py-4 px-5 ">
      <div className="sm:container sm:mx-auto flex justify-between items-center">
        <Button className="h-10 bg-tertiary-100 flex items-center  px-2 rounded-10 hover:bg-tertiary-300">
          <img
            src={profileImage}
            alt="Іконка особистого кабінету"
            className="mr-2"
          />
          <span>Особистий кабінет</span>
        </Button>
        <Logo />
        <div className="flex items-center">
          <Button className="text-center bg-secondary-300 mr-4 py-2 px-5 rounded-10 hover:bg-secondary-500">
            НА ЕКСПАНСІЮ
          </Button>
          <Button className="w-33px h-33px">
            <img src={themeIcon} alt="Іконка зміни теми" />
          </Button>
        </div>
      </div>
    </header>
  );
};
