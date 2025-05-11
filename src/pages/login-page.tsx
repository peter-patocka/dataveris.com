import Footer from '@/pages/home/components/footer';
import Login from '@/pages/home/components/sections/Login';
import TopMenu from '@/pages/home/components/top-menu';
import useInitScript from '@/pages/useInitScript';

const LoginPage = () => {
  useInitScript();
  return (
    <>
      <TopMenu hideMenu={true} />
      <Login />
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

export default LoginPage;
