import { useRef } from "react";

export default function EducationSection() {
  const schoolNameRef = useRef();
  const schoolMajorRef = useRef();
  const startOfStudyRef = useRef();
  const endOfStudyRef = useRef();
  console.log("Ed Render");

  return (
    <div className="education-section section">
      <label htmlFor="schoolName" className="label">
        School
      </label>
      <input
        type="text"
        id="schoolName"
        className="input"
        name="schoolName"
        ref={schoolNameRef}
      />
      <label htmlFor="schoolMajor" className="label">
        School Major
      </label>
      <input
        type="text"
        id="schoolMajor"
        className="input"
        name="schoolMajor"
        ref={schoolMajorRef}
      />
      <label htmlFor="startOfStudy" className="label">
        Start of Study
      </label>
      <input
        type="date"
        id="startOfStudy"
        className="input"
        name="startOfStudy"
        ref={startOfStudyRef}
      />
      <label htmlFor="endOfStudy" className="label">
        End of Study
      </label>
      <input
        type="date"
        name="endOfStudy"
        id="endOfStudy"
        className="input"
        ref={endOfStudyRef}
      />
    </div>
  );
}
