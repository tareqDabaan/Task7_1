import React from "react";
import Hero from "../components/Hero/Hero";
import Partners from "../components/Partners/Partners";
import MyNav from "../components/MyNav/MyNav";
import HomeCardComponent from "../components/HomeCardComponent/HomeCardComponent";
import Steps from "../components/Steps/Steps";
export default function Home() {
  return (
    <div>
      <MyNav />

      <Hero />
      <Partners />
      <HomeCardComponent/>
      <Steps/>
    </div>
  );
}
