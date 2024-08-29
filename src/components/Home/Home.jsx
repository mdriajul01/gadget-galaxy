// @flow strict

import * as React from "react";
import Banner from "./Bannar/Bannar";
import Bages from "./Bannar/Bages";
import Card from "./card/Card";
import Services from "./service/Services";
import ReviewPage from "./review/ReviewPage";
import AboutUs from "./AboutUs/AboutUs";
import ContactUs from "./ContuctUs/ContactUs";
import Qustion from "./Qustion/Qustion";
import Bannar2 from "./Bannar/Bannar2";
// import OtherProducts from "../Products/OtherProducts";


// import BannerBottom from "./Bannar/BannerBottom";

function Home() {
  return (
    <div>
      <Banner></Banner>
      <Bages></Bages>
      <Card></Card>
      <Bannar2></Bannar2>
      <Services></Services>
      <AboutUs></AboutUs>
      <ReviewPage></ReviewPage>
      <ContactUs></ContactUs>
      <Qustion></Qustion>   
    </div>
  );
}

export default Home;
