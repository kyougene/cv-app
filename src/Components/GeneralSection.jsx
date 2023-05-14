import { useRef } from "react";

export default function GeneralSection() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const addressRef = useRef();
  const phoneNumberRef = useRef();

  return (
    <div className="general-section">
      <form action="" className="general-info-form">
        <label htmlFor="first-name" className="label">
          First Name
        </label>
        <input
          type="text"
          id="first-name"
          name="first-name"
          className="input"
          ref={firstNameRef}
        />
        <label htmlFor="last-name" className="label">
          Last Name
        </label>
        <input type="text" ref={lastNameRef} className="input" id="last-name" />
        <label htmlFor="address" className="label">
          Address
        </label>
        <input type="text" ref={addressRef} id="address" className="input" />
        <label htmlFor="phoneNumber" className="label">
          Phone Number
        </label>
        <input
          type="text"
          className="input"
          id="phoneNumber"
          ref={phoneNumberRef}
        />
      </form>
    </div>
  );
}
