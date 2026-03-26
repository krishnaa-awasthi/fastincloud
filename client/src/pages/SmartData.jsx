import SmartDataHero from "../components/smart-data/Hero";
import Overview from "../components/smart-data/Overview";
import GlobalCoverage from "../components/smart-data/GlobalCoverage";
import Accuracy from "../components/smart-data/Accuracy";

export default function SmartData() {
  return (
    <div className="bg-[#0A0A0A]">
      <SmartDataHero />
      <Overview />
      <GlobalCoverage />
      <Accuracy />
    </div>
  );
}