
import { Route, Routes } from 'react-router-dom';
import { Contact } from '../pages/Contact';
import { About } from '../pages/About';
import Home from '../Home';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about-us" element={<About />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </>
    )
}
