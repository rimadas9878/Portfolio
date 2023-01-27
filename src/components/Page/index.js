import React, { useState } from 'react';
import HomePage from '../HomePage';
import NavTabs from '../NavTabs';
import AboutMe from '../About';
import Portfolio from '../Portfolio';
import ContactMe from '../Contact';
import Resume from '../Resume';
import FooterIcons from '../Footer';


export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('HomePage');

    const homepage = () => {
        if(currentPage === 'HomePage') {
            return <HomePage/>       
        }
    }

    const renderPage = () => {

        if (currentPage === 'AboutMe') {
            return <AboutMe />
        }
        if (currentPage === 'Profile') {
            return <Portfolio />;
        }
        if (currentPage === 'ContactMe') {
            return <ContactMe />
        }
        if (currentPage === 'Resume') {
            return <Resume />
        }   
    };

    const footerOnPage = () => {
        if (currentPage === 'HomePage','AboutMe', 'Profile', 'ContactMe', 'Resume') {
            return <FooterIcons />
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            {homepage()}
            {/* Passing the currentPage from state and the function to update it */}
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

            {/* Calling the renderPage method  */}
            {renderPage()}

            {footerOnPage()}
        </div>
    );
}

