import React, { useState, useEffect } from 'react';
import { FaAngleUp } from "react-icons/fa";
import { ScrollToTop, BackTopContainer, Indication } from '../../styles/Footer.elements';

const BackToTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 900) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        }
    }, [])

    return (
        <div>
            <ScrollToTop>
                {isVisible && (
                    <BackTopContainer
                        onClick={() => scrollToTop()}
                    >
                        <Indication>
                            <FaAngleUp />
                        </Indication>
                    </BackTopContainer>
                )}
            </ScrollToTop>
        </div>
    )
}

export default BackToTop;