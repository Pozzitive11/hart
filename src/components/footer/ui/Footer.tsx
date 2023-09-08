import { instagram, telegram, tiktok } from "assets/images";
import { Link } from "react-router-dom";
import { Button } from "shared/ui/button";
import { Logo } from "shared/ui/logo";

export const Footer = () => {
  return (
    <footer className="font-light bg-primary-500 pt-10 pb-5 mt-a">
      <div className="sm:container sm:mx-auto flex justify-between items-center">
        <div>
          <Logo />
          <p className="text-secondary-200 my-4 mb-10">
            центр мистецьких подій
          </p>
          <ul className="flex items-center gap-3">
            <li>
              <img src={telegram} alt="Наш телеграм" />
            </li>
            <li>
              <img src={instagram} alt="Наш інстаграм" />
            </li>
            <li>
              <img src={tiktok} alt="Наш тікток" />
            </li>
          </ul>
        </div>
        <div>
          <ul className="text-secondary-500 text-center flex flex-col gap-3">
            <li>
              <Link to="/">Про нас</Link>
            </li>
            <li>
              <Link to="/">Контакти</Link>
            </li>
            <li>
              <Link to="/">Партнери проєкту</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col items-center gap-3">
            <li>
              <Button className="w-52 h-10 bg-tertiary-100 flex items-center justify-center  px-2 rounded-20 hover:bg-tertiary-300">
                Створити подію
              </Button>
            </li>
            <li>
              <Button className="w-52 h-10 bg-tertiary-100 flex items-center justify-center  px-2 rounded-20 hover:bg-tertiary-300">
                Повідомити подію
              </Button>
            </li>
            <li>
              <Button className="w-52 h-10 bg-tertiary-100 flex items-center justify-center  px-2 rounded-20 hover:bg-tertiary-300">
                Знайти подію
              </Button>
            </li>
          </ul>
        </div>
      </div>
      <small className="pt-5 mt-2 text-secondary-500 flex items-center justify-center border-t border-secondary-100">
        2023 - 2023 © Гарт-хаб подій
      </small>
    </footer>
  );
};
