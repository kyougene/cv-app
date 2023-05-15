import CvForm from "./Components/CvForm.jsx";
import GeneralSection from "./Components/GeneralSection.jsx";
import EducationSection from "./Components/EducationSection.jsx";
import ExperienceSection from "./Components/ExperienceSection.jsx";
import ActionButtons from "./Components/ActionButtons.jsx";
import "./style.css";

function App() {
  return (
    <CvForm>
      <GeneralSection />
      <EducationSection />
      <ExperienceSection />
      <ActionButtons />
    </CvForm>
  );
}

export default App;
