// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';


const Slider = () => {


    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[FreeMode, Autoplay, Pagination, Navigation]}
                loop={true}
                className="mySwiper"
            >
                {/* <SwiperSlide>
                    <img  className=' w-full'src={pic1} alt="" />
                </SwiperSlide> */}
                <SwiperSlide
                style={{
                    'position': 'relative',
                }}
                >
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    <div className='absolute top-4 p-6'>
                        <div className="text-3xl font-bold">
                            Slide 1
                        </div>
                        <div className="text-xl font-semibold">
                            Subtitle
                        </div>
                        <div className="text-base font-semibold" >
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                {/* <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide> */}
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                </SwiperSlide>
            </Swiper>

        </>
    );
};

export default Slider;