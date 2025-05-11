const Footer = () => {
  return (
    <footer
      className="wow fadeInUp relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]"
      data-wow-delay=".15s"
    >
      <div className="mt-12 border-t border-[#8890A4]/40 py-8 lg:mt-[60px] footer-bar">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 md:w-2/3 lg:w-1/2"></div>
            <div className="w-full px-4 md:w-1/3 lg:w-1/2">
              <div className="flex justify-center my-1 md:justify-end">
                <p className="text-base text-gray-7">
                  © Copyright 2025{' '}
                  <a
                    href="https://dataveris.com"
                    rel="nofollow noopner noreferrer"
                    target="_blank"
                    className="text-gray-1 hover:underline"
                  >
                    Dataveris LLC
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
