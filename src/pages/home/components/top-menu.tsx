import logoWhite from '../../../assets/images/logo/logo.png';

interface TopMenuProps {
  hideMenu?: boolean;
}

const TopMenu = (props: TopMenuProps) => {
  return (
    <div className="absolute top-0 left-0 z-40 flex items-center w-full bg-transparent ud-header">
      <div className="container px-4 mx-auto">
        <div className="relative flex items-center justify-between -mx-4">
          <div className="max-w-full px-4 w-60">
            <a href="/" className="block w-full py-5 navbar-logo">
              <img src={logoWhite} alt="logo" className="w-full header-logo" />
            </a>
          </div>
          <div className="flex items-center justify-between w-full px-4">
            <div>
              <button
                id="navbarToggler"
                className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
              </button>
              <nav
                id="navbarCollapse"
                className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:px-4 lg:py-0 lg:shadow-none dark:lg:bg-transparent xl:px-6"
              >
                <ul className="blcok lg:flex 2xl:ml-20">
                  <li className="relative group">
                    <a
                      href={props.hideMenu ? '/' : '#home'}
                      className="flex py-2 mx-8 text-base font-medium ud-menu-scroll text-dark group-hover:text-primary dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
                    >
                      Home
                    </a>
                  </li>
                  {!props.hideMenu && (
                    <>
                      <li className="relative group">
                        <a
                          href="#about"
                          className="flex py-2 mx-8 text-base font-medium ud-menu-scroll text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                        >
                          About Dataveris
                        </a>
                      </li>
                      <li className="relative group">
                        <a
                          href="#services"
                          className="flex py-2 mx-8 text-base font-medium ud-menu-scroll text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                        >
                          Services
                        </a>
                      </li>
                      <li className="relative group">
                        <a
                          href="#industries"
                          className="flex py-2 mx-8 text-base font-medium ud-menu-scroll text-dark group-hover:text-primary dark:text-red lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                        >
                          Industries
                        </a>
                      </li>
                      <li className="relative group">
                        <a
                          href="#schedule"
                          className="flex py-2 mx-8 text-base font-medium ud-menu-scroll text-dark-2 group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                        >
                          Free Consultation
                        </a>
                      </li>
                      <li className="relative group">
                        <a
                          href="#contact"
                          className="flex py-2 mx-8 text-base font-medium ud-menu-scroll text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                        >
                          Contact
                        </a>
                      </li>
                    </>
                  )}
                </ul>
              </nav>
            </div>
            <div className="flex items-center justify-end pr-16 lg:pr-0">
              <label
                htmlFor="themeSwitcher"
                className="inline-flex items-center cursor-pointer"
                aria-label="themeSwitcher"
              >
                <input type="hidden" name="themeSwitcher" id="themeSwitcher" className="sr-only" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
