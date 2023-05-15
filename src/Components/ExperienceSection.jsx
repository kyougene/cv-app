import { useRef } from "react";

export default function ExperienceSection() {
  const jobTitleRef = useRef();
  const companyNameRef = useRef();
  const descriptionRef = useRef();
  const startOfJobRef = useRef();
  const endOfJobRef = useRef();

  return (
    <div className="experience-section section">
      <label htmlFor="job-title" className="label">
        Job Title
      </label>
      <input
        type="text"
        id="job-title"
        name="job-title"
        className="input"
        ref={jobTitleRef}
      />
      <label htmlFor="company-name" className="label">
        Company
      </label>
      <input
        type="text"
        id="company-name"
        name="companyName"
        className="input"
        ref={companyNameRef}
      />
      <label htmlFor="description" className="label">
        Description
      </label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        ref={descriptionRef}
        className="description"
      ></textarea>
      <label htmlFor="startOfJob" className="label">
        Start of Job
      </label>
      <input
        type="date"
        id="startOfJob"
        className="input"
        name="startOfJob"
        ref={startOfJobRef}
      />
      <label htmlFor="endOfJob" className="label">
        End of Job
      </label>
      <input
        type="date"
        name="endOfJob"
        id="endOfJob"
        className="input"
        ref={endOfJobRef}
      />
    </div>
  );
}
