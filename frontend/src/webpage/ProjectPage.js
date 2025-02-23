// web/src/webpage/ProjectPage.js
import SampleOperatingAgreement from './sections/SampleOperatingAgreement';
import WorkflowVisualization from './sections/WorkflowVisualization';
import DataInsights from './sections/DataInsights'; 
import PlatformSection from './sections/PlatformSection';
import DatasetCard from './sections/DatasetCard';
import BottomSections from './sections/BottomSections';
import OverviewSection from './sections/OverviewSection';
import Header from './sections/Header';
import EntityFormationWorkflow from './sections/EntityFormationWorkflow';

const ProjectPage = () => {
  return (
    <>
      <Header />
      <OverviewSection />
      <SampleOperatingAgreement />
      <PlatformSection />
      <EntityFormationWorkflow />
      <WorkflowVisualization />
      <DatasetCard />
      <DataInsights />
      <BottomSections />
    </>
  );
};

export default ProjectPage;
