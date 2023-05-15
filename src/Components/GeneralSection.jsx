export default function GeneralSection(props) {
  console.log(props);
  return (
    <div className="general-section section">
      <label htmlFor="first-name" className="label">
        First Name
      </label>
      <input
        type="text"
        id="first-name"
        name="first-name"
        className="input"
        ref={props.firstNameRef}
      />
      <label htmlFor="last-name" className="label">
        Last Name
      </label>
      <input
        type="text"
        className="input"
        id="last-name"
        ref={props.lastNameRef}
      />
      <label htmlFor="address" className="label">
        Address
      </label>
      <input
        type="text"
        id="address"
        className="input"
        ref={props.addressRef}
      />
      <label htmlFor="phoneNumber" className="label">
        Phone Number
      </label>
      <input
        type="text"
        className="input"
        id="phoneNumber"
        ref={props.phoneNumberRef}
      />
    </div>
  );
}
