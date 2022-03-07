import React from 'react';
import Carousel from 'react-elastic-carousel';
import { FirstContainer, TitleCarouselTwo, TitleCard, ContainerImgsCarousel, ContainerImgCarousel, ImgCarouselTwo } from '../../../styles/Carousel.elements';

const CarouselOne = () => {
    return (
        <FirstContainer>

            <TitleCarouselTwo>Categorías</TitleCarouselTwo>

            <Carousel itemsToShow={5} pagination={false}>
                
                <ContainerImgsCarousel>
                    <ContainerImgCarousel>
                        <ImgCarouselTwo src="https://res.cloudinary.com/app-firework1/image/upload/v1646592701/carousel/Screenshot_2022-03-06_134909_eomfbd.png" alt="categories" title="Frontend"/>
                    </ContainerImgCarousel>
                    <TitleCard>Frontend</TitleCard>
                </ContainerImgsCarousel>
                
                <ContainerImgsCarousel>
                    <ContainerImgCarousel>
                        <ImgCarouselTwo src="https://res.cloudinary.com/app-firework1/image/upload/v1646589206/carousel/pngwing.com_1_gbbbqw.png" alt="categories" title="Backend" />
                    </ContainerImgCarousel>
                    
                    <TitleCard>Backend</TitleCard>
                </ContainerImgsCarousel>

                <ContainerImgsCarousel>
                    <ContainerImgCarousel>
                        <ImgCarouselTwo src="https://res.cloudinary.com/app-firework1/image/upload/v1646589196/carousel/pngwing.com_5_gmlj4g.png" alt="categories" title="Fullstack" />
                    </ContainerImgCarousel>
                    
                    <TitleCard>Fullstack</TitleCard>
                </ContainerImgsCarousel>

                <ContainerImgsCarousel>
                    <ContainerImgCarousel>
                        <ImgCarouselTwo src="https://res.cloudinary.com/app-firework1/image/upload/v1646600885/carousel/uiux_g3tiqq.png" alt="categories" title="Diseño UI/UX" />
                    </ContainerImgCarousel>
                    
                    <TitleCard>Diseño UI/UX</TitleCard>
                </ContainerImgsCarousel>

                <ContainerImgsCarousel>
                    <ContainerImgCarousel>
                        <ImgCarouselTwo src="https://res.cloudinary.com/app-firework1/image/upload/v1646589194/carousel/pngwing.com_7_ejw3nf.png" alt="categories" title="Data Science" />
                    </ContainerImgCarousel>
                    
                    <TitleCard>Data Science</TitleCard>
                </ContainerImgsCarousel>

                <ContainerImgsCarousel>
                    <ContainerImgCarousel>
                        <ImgCarouselTwo src="https://res.cloudinary.com/app-firework1/image/upload/v1646589207/carousel/pngwing.com_apdhzb.png" alt="categories" title="Aplicaciones de escritorio" />
                    </ContainerImgCarousel>
                    
                    <TitleCard>Aplicaciones de escritorio</TitleCard>
                </ContainerImgsCarousel>

                <ContainerImgsCarousel>
                    <ContainerImgCarousel>
                        <ImgCarouselTwo src="https://res.cloudinary.com/app-firework1/image/upload/v1646589195/carousel/pngwing.com_6_gnfc0j.png" alt="categories" title="Aplicaciones moviles" />
                    </ContainerImgCarousel>
                    
                    <TitleCard>Aplicaciones móviles</TitleCard>
                </ContainerImgsCarousel>

                <ContainerImgsCarousel>
                    <ContainerImgCarousel>
                        <ImgCarouselTwo src="https://res.cloudinary.com/app-firework1/image/upload/v1646589215/carousel/pngwing.com_8_e8xne3.png" alt="categories" title="e-commerce" />
                    </ContainerImgCarousel>
                    
                    <TitleCard>e-commerce</TitleCard>
                </ContainerImgsCarousel>

                <ContainerImgsCarousel>
                    <ContainerImgCarousel>
                        <ImgCarouselTwo src="https://res.cloudinary.com/app-firework1/image/upload/v1646589206/carousel/pngwing.com_3_zo41qc.png" alt="categories" title="Testing" />
                    </ContainerImgCarousel>
                    
                    <TitleCard>Testing</TitleCard>
                </ContainerImgsCarousel>

            </Carousel>
        </FirstContainer>
    )
};

export default CarouselOne;