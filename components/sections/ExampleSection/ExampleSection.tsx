import Image from 'next/image';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import styles from './examples-section.module.scss';
import Icon, { MIcon } from './../../icons/Icon';
import tatooine from '../../../public/images/tatooine.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import { EffectFade, Navigation } from 'swiper';
import { motion } from 'framer-motion';
import { droidVariants } from './example.animation';
import { sectionVariants } from './../../../utils/animation.variants';

const ExampleSection = () => {
  const scrollRef = useRef(null);

  return (
    <motion.section
      className={styles.examples}
      id="example-section"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8, once: true }}
    >
      <div className={styles.examplesLabel}>
        <MIcon name="circle-droid" variants={droidVariants} />
        <motion.h1 className={styles.examplesLabelText} variants={sectionVariants}>
          Examples
        </motion.h1>
      </div>
      <motion.div className={styles.examplesBody} variants={sectionVariants} custom={2}>
        <MIcon name="left-arrow" className={`${styles.navigationButton} navigationPrev`} />
        <div className={styles.examplesSwiper}>
          <Swiper
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            centeredSlides={true}
            
            navigation={{
              prevEl: '.navigationPrev',
              nextEl: '.navigationNext',
            }}
            modules={[Navigation, EffectFade]}
          >
            <SwiperSlide className={styles.example}>
              <div>
                <h1 className={styles.exampleLabel}>Planet Tatuin</h1>
                <p className={styles.exampleText}>
                  climate: Arid orbital_period: 304 population: 12000 rotation_period: 230 terrain:
                  Dessert surface_water: 1
                </p>
              </div>

              <div className={styles.exampleImage}>
                <Image src={tatooine} />
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.example}>
              <div>
                <h1 className={styles.exampleLabel}>Planet Naboo</h1>
                <p className={styles.exampleText}>fsdfsddfsdfsf fsdaf afdsfa fsdfa fsfsa fsdfaf</p>
              </div>

              <div className={styles.exampleImage}>
                <Image src={tatooine} />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <Icon name="right-arrow" className={`${styles.navigationButton} navigationNext`} />
      </motion.div>
    </motion.section>
  );
};

export default ExampleSection;
