export default function ExperienceSection(props) {
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
        ref={props.jobTitleRef}
      />
      <label htmlFor="company-name" className="label">
        Company
      </label>
      <input
        type="text"
        id="company-name"
        name="companyName"
        className="input"
        ref={props.companyNameRef}
      />
      <label htmlFor="description" className="label">
        Description
      </label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        ref={props.descriptionRef}
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
        ref={props.startOfJobRef}
      />
      <label htmlFor="endOfJob" className="label">
        End of Job
      </label>
      <input
        type="date"
        name="endOfJob"
        id="endOfJob"
        className="input"
        ref={props.endOfJobRef}
      />
    </div>
  );
}
