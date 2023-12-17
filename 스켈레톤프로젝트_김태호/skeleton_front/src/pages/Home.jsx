import React from 'react';

import SwiperImages from '@components/homes/SwiperImages';
import OurServices from '@components/homes/OurServices';
import LatestProperties from '@components/homes/LatestProperties';
import BestAgents from '@components/homes/BestAgents';
import LatestNews from '@components/homes/LatestNews';
import Testimonials from '@components/homes/Testimonials';

function Home() {
  return (
    <>
      {/* ======= 스크롤 메인 이미지 ======= */}
      <SwiperImages />

      <main id="main">
        {/* ======= Services Section ======= */}
        <OurServices></OurServices>

        {/* ======= End Services Section ======= */}
        <LatestProperties></LatestProperties>

        {/* ======= Agents Section ======= */}
        <BestAgents></BestAgents>

        {/*  ======= Latest News Section ======= */}
        <LatestNews></LatestNews>

        {/* ======= Testimonials Section ======= */}
        <Testimonials></Testimonials>
      </main>
    </>
  );
}

export default Home;
