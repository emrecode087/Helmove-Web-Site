import { Hero } from "../components/Hero";
import { Philosophy } from "../components/Philosophy";
import { SocialHeart } from "../components/SocialHeart";
import { HelmicHardware } from "../components/HelmicHardware";
import { Telemetry } from "../components/Telemetry";
import { TechSpecs } from "../components/TechSpecs";
import { DynamicRouting } from "../components/DynamicRouting";

export function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <SocialHeart />
      {/* <HelmicHardware /> */}
      <Telemetry />
      <TechSpecs />
      <DynamicRouting />
    </>
  );
}