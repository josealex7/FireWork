import React from 'react';
import Carousel from 'react-elastic-carousel';
import { FirstContainer, TitleCarouselTwo, TitleCard, ImgCarouselTwo } from '../../../styles/Carousel.elements';

const CarouselOne = () => {
    return (
        <FirstContainer>

            <TitleCarouselTwo>Categorías</TitleCarouselTwo>

            <Carousel itemsToShow={5} pagination={false}>
                
                <div>
                    <ImgCarouselTwo src="https://res.cloudinary.com/app-firework1/image/upload/v1645672148/carousel/translation_ay5qfi.jpg" alt="categories" title="Translation" />
                    <TitleCard>Traducciones</TitleCard>
                </div>
                
                <div>
                    <ImgCarouselTwo src="https://res.cloudinary.com/app-firework1/image/upload/v1645672145/carousel/seo_f3ifgf.jpg" alt="categories" title="Seo" />
                    <TitleCard>Seo</TitleCard>
                </div>

                <div>
                    <ImgCarouselTwo src="https://res.cloudinary.com/app-firework1/image/upload/v1645672143/carousel/logo-design_vxa3es.jpg" alt="categories" title="Logo Design" />
                    <TitleCard>Diseño de logos</TitleCard>
                </div>

                <div>
                    <ImgCarouselTwo src="https://res.cloudinary.com/app-firework1/image/upload/v1645672141/carousel/developers_hbdjhq.jpg" alt="categories" title="Developers" />
                    <TitleCard>Desarrollo web</TitleCard>
                </div>

                <div>
                    <ImgCarouselTwo src="https://res.cloudinary.com/app-firework1/image/upload/v1645672138/carousel/illustration_iox0dt.jpg" alt="categories" title="Illustration" />
                    <TitleCard>Ilustraciones</TitleCard>
                </div>

                <div>
                    <ImgCarouselTwo src="https://res.cloudinary.com/app-firework1/image/upload/v1645672137/carousel/book-covers_kp9yy3.jpg" alt="categories" title="Book Covers" />
                    <TitleCard>Portada de libros</TitleCard>
                </div>

                <div>
                    <ImgCarouselTwo src="https://res.cloudinary.com/app-firework1/image/upload/v1645672135/carousel/animated-explainer_jxylv3.jpg" alt="categories" title="Animated Explainer" />
                    <TitleCard>Fotografías</TitleCard>
                </div>

                <div>
                    <ImgCarouselTwo src="https://res.cloudinary.com/app-firework1/image/upload/v1645672132/carousel/social_amugpn.jpg" alt="categories" title="Social" />
                    <TitleCard>Redes sociales</TitleCard>
                </div>

                <div>
                    <ImgCarouselTwo src="https://res.cloudinary.com/app-firework1/image/upload/v1645672131/carousel/voiceover_yjbxi8.jpg" alt="categories" title="Voiceover" />
                    <TitleCard>Voiceover</TitleCard>
                </div>

            </Carousel>
        </FirstContainer>
    )
};

export default CarouselOne;