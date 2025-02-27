import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Menu } from "lucide-react";

type navItemType = {
  id: number;
  title: string;
  link: string;
};

const navItems: navItemType[] = [
  {
    id: 1,
    title: "Features",
    link: "/",
  },
  {
    id: 2,
    title: "Workflow",
    link: "/",
  },
  {
    id: 3,
    title: "Pricing",
    link: "/",
  },
  {
    id: 4,
    title: "Testimonials",
    link: "/",
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isMenuToggled && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-500 ease-in-out"
          onClick={() => setIsMenuToggled(false)}
        ></div>
      )}
      <nav
        className={`sticky top-0 left-0 w-full border-b-[1px] border-neutral-700/70 backdrop-blur-md bg-neutral-900/50 z-50 transition-all duration-300 ${
          isScrolled ? "py-0" : "py-3"
        }`}
      >
        <div className="container flex items-center justify-between gap-4 text-white py-3">
          <a href="/" className="flex items-center gap-2">
            <img
              src="/src/assets/logo.png"
              alt=""
              className="w-[40px] h-auto"
            />
            <div className="text-xl">Virtual</div>
          </a>
          <ul className="hidden lg:flex items-center gap-12">
            {navItems.map((navItem) => (
              <li key={navItem.id} className="text-[15px] font-normal">
                <a href={navItem.link} className="text-neutral-300 hover:text-white transition-colors duration-300">{navItem.title}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex items-center gap-5">
            <Button className="text-sm">Sign In</Button>
            <Button variant={"gradient"} className="text-sm">
              Create an account
            </Button>
          </div>
          <div className="flex lg:hidden">
            <button onClick={() => setIsMenuToggled((state) => !state)}>
              <Menu />
            </button>
          </div>

          <div
            className={`fixed z-50 right-0 top-full w-full min-h-[50px] gap-8 bg-secondary p-16 flex-col items-center flex lg:hidden transition-all duration-300 ${
              isMenuToggled
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            } `}
          >
            <ul className=" flex flex-col items-center gap-8">
              {navItems.map((navItem) => (
                <li key={navItem.id} className="text-[15px] font-normal">
                  <a href={navItem.link}>{navItem.title}</a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-[40px]">
              <Button className="text-sm">Sign In</Button>
              <Button variant={"gradient"} className="text-sm">
                Create an account
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
