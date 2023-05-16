export default function EducationSection(props) {
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
        ref={props.schoolNameRef}
      />
      <label htmlFor="schoolMajor" className="label">
        School Major
      </label>
      <input
        type="text"
        id="schoolMajor"
        className="input"
        name="schoolMajor"
        ref={props.schoolMajorRef}
      />
      <label htmlFor="startOfStudy" className="label">
        Start of Study
      </label>
      <input
        type="date"
        id="startOfStudy"
        className="input"
        name="startOfStudy"
        ref={props.startOfStudyRef}
      />
      <label htmlFor="endOfStudy" className="label">
        End of Study
      </label>
      <input
        type="date"
        name="endOfStudy"
        id="endOfStudy"
        className="input"
        ref={props.endOfStudyRef}
      />
    </div>
  );
}
