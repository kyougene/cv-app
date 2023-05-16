import CvForm from "./Components/CvForm.jsx";
import GeneralSection from "./Components/GeneralSection.jsx";
import EducationSection from "./Components/EducationSection.jsx";
import ExperienceSection from "./Components/ExperienceSection.jsx";
import ActionButtons from "./Components/ActionButtons.jsx";
import "./style.css";
import { useRef, useState, useEffect } from "react";

function App() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const addressRef = useRef();
  const phoneNumberRef = useRef();
  const schoolNameRef = useRef();
  const schoolMajorRef = useRef();
  const startOfStudyRef = useRef();
  const endOfStudyRef = useRef();
  const jobTitleRef = useRef();
  const companyNameRef = useRef();
  const descriptionRef = useRef();
  const startOfJobRef = useRef();
  const endOfJobRef = useRef();
  const [formData, setFormData] = useState({});

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      firstName: firstNameRef.current?.value || "",
      lastName: lastNameRef.current?.value || "",
      address: addressRef.current?.value || "",
      phoneNumber: phoneNumberRef.current?.value || "",
      schoolName: schoolNameRef.current?.value || "",
      schoolMajor: schoolMajorRef.current?.value || "",
      studyStartDate: startOfStudyRef.current?.value || null,
      studyEndDate: endOfStudyRef.current?.value || null,
      jobTitle: jobTitleRef.current?.value || "",
      companyName: companyNameRef.current?.value || "",
      description: descriptionRef.current?.value || "",
      jobStart: startOfJobRef.current?.value || null,
      jobEnd: endOfJobRef.current?.value || null,
    };

    setFormData(data);
  }

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <CvForm onSubmit={handleSubmit}>
      <GeneralSection
        firstNameRef={firstNameRef}
        lastNameRef={lastNameRef}
        addressRef={addressRef}
        phoneNumberRef={phoneNumberRef}
      />
      <EducationSection
        schoolNameRef={schoolNameRef}
        schoolMajorRef={schoolMajorRef}
        startOfStudyRef={startOfStudyRef}
        endOfStudyRef={endOfStudyRef}
      />
      <ExperienceSection
        jobTitleRef={jobTitleRef}
        companyNameRef={companyNameRef}
        descriptionRef={descriptionRef}
        startOfJobRef={startOfJobRef}
        endOfJobRef={endOfJobRef}
      />
      <ActionButtons />
    </CvForm>
  );
}

export default App;
