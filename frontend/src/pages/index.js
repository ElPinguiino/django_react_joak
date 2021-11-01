import React, {useState} from 'react';
import MainSection from '../components/MainSection';
import InfoSection from '../components/InfoSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import { homeObjUno } from '../components/MenuSection/Data';
import Store from '../components/Store'
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import CateringForm from '../components/CateringForm';
import ReviewForm from '../components/ReviewForm';
import MenuSection from '../components/MenuSection';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };



    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/> 
            <MainSection />
            <InfoSection {...homeObjOne} />
            <MenuSection {...homeObjUno} />
            <InfoSection {...homeObjThree} />
            <ContactForm />
            <CateringForm />
            <ReviewForm />
            <Store />
            <Footer />
        </>
    );
};

export default Home;