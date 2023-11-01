import React from "react";
import "./style.css";

//componentes
import { PremiumBanner } from "../../components/PremiumBanner";
import { Statistic } from "../../components/Statistics";
import { StatsBoxes } from "../../components/StatsBoxes";
import { Navigation } from "../../components/Navigation";
import { CourseSection } from "../../components/CourseSection";
import { MyCourse } from "../../components/MyCourses";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";



export const FreeOnlineCourses = () => {
  return (
    <div className="FREE-online-courses">
      <div className="div">
        <div className="GO-PREMIUM-BANNER">
          <PremiumBanner></PremiumBanner>
        </div>
        <div className="YOUR-STATISTICS">
          <Statistic></Statistic>
        </div>
        <div className="STATS-BOXES">
          <StatsBoxes></StatsBoxes>
        </div>
        <div className="NAVIGATION">
          <Navigation></Navigation>
        </div>
        <div className="COURSES-SECTION">
          <CourseSection></CourseSection>
        </div>
        <div className="MY-COURSE">
          <MyCourse></MyCourse>
        </div>
        <header className="HEADER">
          <Header></Header>
        </header>
        <div className="MENU">
              <Menu></Menu>
        </div>
      </div>
    </div>
  );
};
