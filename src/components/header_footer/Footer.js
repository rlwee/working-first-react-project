import React from 'react';

import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bcl_red">
            <Fade delay={500}>
                <div className="fontrighteous footer_logo_venue">
                    MJAAAS
                </div>
                <div className="footer_copyright">
                    MJAAAS 2020.All rights reserved
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;