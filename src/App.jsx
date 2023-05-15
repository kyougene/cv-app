import CvForm from "./Components/CvForm.jsx";
import GeneralSection from "./Components/GeneralSection.jsx";
import EducationSection from "./Components/EducationSection.jsx";
import ExperienceSection from "./Components/ExperienceSection.jsx";
import ActionButtons from "./Components/ActionButtons.jsx";
import "./style.css";
import { useRef, useState } from "react";

function App() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const addressRef = useRef();
  const phoneNumberRef = useRef();
  const [formData, setFormData] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    setFormData({
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      address: addressRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
    });
    console.log(formData);
  }

  return (
    <CvForm onSubmit={handleSubmit}>
      <GeneralSection
        formRefs={{ firstNameRef, lastNameRef, addressRef, phoneNumberRef }}
      />
      <EducationSection />
      <ExperienceSection />
      <ActionButtons />
    </CvForm>
  );
}

export default App;
