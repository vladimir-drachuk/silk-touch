import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { sliderItems } from './slider-items';
import { useDevice } from '../../hooks/use-device';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import './slider.scss';

const getPathToImg = (name: string, isMobile: boolean) => {
    return `../../../assets/images/slider-photos/${isMobile ? 'mobile' : 'desktop'}/${name}`
}

export const Slider = (): JSX.Element => {
    const { isMobile, isDesktop } = useDevice();

    return (
        <Swiper
            className="react-slider"
            modules={[Navigation, Pagination]}
            navigation={!isDesktop}
            pagination={{ clickable: true }}
        >
            {sliderItems.map((fileName, index) => (
                <SwiperSlide key={fileName}>
                    <img
                        className="react-slider-slide-image"
                        src={getPathToImg(fileName, isMobile)}
                        alt={`slide-${index + 1}`}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
};