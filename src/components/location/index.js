import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197.75742670279277!2d-121.95622369496988!3d37.52869609895509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc72d0f3bf09f%3A0xe8d6bc08198d2c3f!2sFontana%20Apartments!5e0!3m2!1sen!2sph!4v1577696067635!5m2!1sen!2sph" 
                    width="100%" 
                    height="500px" 
                    frameBorder="0" 
                    allowFullScreen>
            </iframe>

            <div className="location_tag">
                <div>
                    Location
                </div>
            </div>

        </div>
    );
};

export default Location;