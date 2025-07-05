import Footer from '@/components/footer.tsx';
import HomeBanner from '@/components/home-banner.tsx';
import Sections from '@/components/sections.tsx';
import TopMenu from '@/components/top-menu.tsx';
import useInitScript from '@/pages/useInitScript';

const HomePage = () => {
  useInitScript();
  return (
    <>
      <TopMenu />
      <HomeBanner />
      <Sections />
      <a
        href="#backToTop"
        className="fixed left-auto items-center justify-center hidden w-10 h-10 text-white transition duration-300 ease-in-out rounded-md shadow-md back-to-top bottom-8 right-8 z-999 bg-primary hover:bg-dark"
      >
        <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
      </a>
      <Footer />
    </>
  );
};

export default HomePage;
