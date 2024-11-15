import React from "react";
import HomeCard from "../HomeCard/HomeCard"; // Adjust the import path accordingly
import { FaBox, FaCog, FaLaptopCode, FaChartBar } from "react-icons/fa";

export default function HomeCardComponent() {
  return (
    <div>
      <div style={styles.container}>
        <HomeCard
          icon={<FaBox />}
          title="Woo Commerce"
          description="Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services."
        />
        <HomeCard
          icon={<FaCog />}
          title="CRM Solutions"
          description="Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services."
        />
        <HomeCard
          icon={<FaLaptopCode />}
          title="Web Design"
          description="Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services."
        />
        <HomeCard
          icon={<FaChartBar />}
          title="Data Guard Sentinel"
          description="Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services."
        />
      </div>
    </div>
  );
}
const styles = {
  container: {
    display: "flex",
    gap: "20px",
    marginLeft:"60px",
    marginRight:"60px",
    padding: "40px",
    justifyContent: "space-around",
  },
};
