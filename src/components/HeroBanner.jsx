import React from "react";
import "../styles/HeroBanner.css"


function HeroBanner(){
    const scrollToSection = (sectionId, targetPosition = 0) => {
        const section = document.getElementById(sectionId);
        if (section) {
          if (targetPosition > 0) {
            const targetPosition = section.offsetTop - 100;
            window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
            });
            }else{
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
      };
    return (
        <section>
            <div className="hero-banner-container full-block">
                <div className="hero-banner full-block">
                    <div className="container">
                        <div className="hero-banner-left-side">
                            <div className="hero-banner-left-side_content">                              
                                <div className="hero-banner-left-side_content-btns">                       
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroBanner;