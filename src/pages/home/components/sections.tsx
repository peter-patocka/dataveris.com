import About from '@/pages/home/components/sections/About';
import ContactForm from '@/pages/home/components/sections/ContactForm';
import Industries from '@/pages/home/components/sections/Industries';
import ScheduleConsultation from '@/pages/home/components/sections/ScheduleConsultation.tsx';

const Sections = () => {
  return (
    <>
      <About />
      <Industries />
      <ScheduleConsultation />
      <ContactForm />
    </>
  );
};

export default Sections;
