import React from 'react';
import Carousel from 'react-elastic-carousel';
import { FirstContainer, ImgCarouselTwo } from '../../styles/Carousel.elements';

const CarouselOne = () => {
    return (
        <FirstContainer>

            <Carousel itemsToShow={5} pagination={false}>
                
                <ImgCarouselTwo src="https://res.cloudinary.com/app-firework1/image/upload/v1645672148/carousel/translation_ay5qfi.jpg" alt="categories" title="Translation" />

                <ImgCarouselTwo src="https://res.cloudinary.com/app-firework1/image/upload/v1645672145/carousel/seo_f3ifgf.jpg" alt="categories" title="Seo" />

                <ImgCarouselTwo src="https://res.cloudinary.com/app-firework1/image/upload/v1645672143/carousel/logo-design_vxa3es.jpg" alt="categories" title="Logo Design" />

                <ImgCarouselTwo src="https://res.cloudinary.com/app-firework1/image/upload/v1645672141/carousel/developers_hbdjhq.jpg" alt="categories" title="Developers" />

                <ImgCarouselTwo src="https://res.cloudinary.com/app-firework1/image/upload/v1645672138/carousel/illustration_iox0dt.jpg" alt="categories" title="Illustration" />

                <ImgCarouselTwo src="https://res.cloudinary.com/app-firework1/image/upload/v1645672137/carousel/book-covers_kp9yy3.jpg" alt="categories" title="Book Covers" />

                <ImgCarouselTwo src="https://res.cloudinary.com/app-firework1/image/upload/v1645672135/carousel/animated-explainer_jxylv3.jpg" alt="categories" title="Animated Explainer" />

                <ImgCarouselTwo src="https://res.cloudinary.com/app-firework1/image/upload/v1645672132/carousel/social_amugpn.jpg" alt="categories" title="Social" />

                <ImgCarouselTwo src="https://res.cloudinary.com/app-firework1/image/upload/v1645672131/carousel/voiceover_yjbxi8.jpg" alt="categories" title="Voiceover" />

            </Carousel>
        </FirstContainer>
    )
};

export default CarouselOne;