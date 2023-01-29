import React, { useState } from 'react';

import Home from '../Home';
import NavTabs from '../NavTabs';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume';
import FooterIcons from '../Footer';


export default function PageContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
    
    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
          }
        if (currentPage === 'About') {
            return <About />
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />
        }
        if (currentPage === 'Resume') {
            return <Resume />
        }   
    };

    const footerOnPage = () => {
        if (currentPage === 'Home','About', 'Portfolio', 'Contact', 'Resume') {
            return <FooterIcons />
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

            {renderPage()}

            {footerOnPage()}
        </div>
    );
}

