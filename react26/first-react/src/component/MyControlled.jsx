import { useRef, useState } from "react";
import styles from "../modules/MyControlled.module.css";
import myStyles from "../modules/formControl.module.css";
export default function MyControlled() {
  const [name, setName] = useState("Asif");
  const [email, setEmail] = useState("asif@gmail.com");
  const [skills, setSkills] = useState([]);
  const [country, setCountry] = useState("India");
  const [state, setState] = useState("UP");
  const inputRef = useRef(null);
  function clearTextBox() {
    setName("");
    setEmail("");
    setSkills([]);
    setCountry("India");
    setState("UP");
  }

  const selectedSkills = (event) => {
    const val = event.target.value;

    if (event.target.checked) {
      setSkills([...skills, val]);
    } else {
      setSkills(skills.filter((item) => item !== val));
    }
  };
  // new input ref
  const getInput = () => {

  };
  const students = [
    {
      id: 1,
      name: "Rahul Sharma",
      age: 20,
      course: "BCA",
      email: "rahul@gmail.com",
    },
    {
      id: 2,
      name: "Priya Verma",
      age: 21,
      course: "BBA",
      email: "priya@gmail.com",
    },
    {
      id: 3,
      name: "Amit Kumar",
      age: 22,
      course: "B.Tech",
      email: "amit@gmail.com",
    },
    {
      id: 4,
      name: "Sneha Reddy",
      age: 20,
      course: "MBA",
      email: "sneha@gmail.com",
    },
    {
      id: 5,
      name: "Arjun Patel",
      age: 23,
      course: "MCA",
      email: "arjun@gmail.com",
    },
  ];

  return (
    <div className={styles.container}>
      {/* <Button variant="primary" type="submit">
        Bootstrap - Submit
      </Button> */}
      <h2 className={styles.heading}>Controlled Form</h2>
      <input type="text" onChange={getInput} ref={inputRef} />
      <form className={styles.form}>
        {/* Name */}
        <div className={styles.field}>
          <label className={styles.label}>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className={styles.input}
          />
          <small className={styles.preview}>Preview: {name}</small>
        </div>

        {/* Email */}
        <div className={styles.field}>
          <label className={styles.label}>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className={styles.input}
          />
          <small className={styles.preview}>Preview: {email}</small>
        </div>

        {/* Checkboxes */}
        <div className={styles.field}>
          <label className={styles.label}>Technologies</label>

          <div className={styles.checkboxGroup}>
            <label>
              <input type="checkbox" value="React" onChange={selectedSkills} />{" "}
              React
            </label>

            <label>
              <input
                type="checkbox"
                value="Angular"
                onChange={selectedSkills}
              />{" "}
              Angular
            </label>
          </div>

          <small className={styles.preview}>
            Selected Skills: <strong>{skills.join(", ")}</strong>
          </small>
        </div>

        {/* Radio */}
        <div className={styles.field}>
          <label className={styles.label}>Country</label>

          <div className={styles.radioGroup}>
            <label>
              <input
                type="radio"
                name="country"
                value="India"
                checked={country === "India"}
                onChange={(e) => setCountry(e.target.value)}
              />
              India
            </label>

            <label>
              <input
                type="radio"
                name="country"
                value="USA"
                checked={country === "USA"}
                onChange={(e) => setCountry(e.target.value)}
              />
              USA
            </label>

            <label>
              <input
                type="radio"
                name="country"
                value="UK"
                checked={country === "UK"}
                onChange={(e) => setCountry(e.target.value)}
              />
              UK
            </label>
          </div>

          <small className={styles.preview}>
            Selected Country: <strong>{country}</strong>
          </small>
        </div>

        {/* Dropdown */}
        <div className={styles.field}>
          <label className={styles.label}>State</label>

          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className={styles.input}
          >
            <option value="KA">KA</option>
            <option value="UP">UP</option>
            <option value="MP">MP</option>
            <option value="Bihar">Bihar</option>
          </select>

          <small className={styles.preview}>
            Selected State: <strong>{state}</strong>
          </small>
        </div>

        {/* Buttons */}
        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.primaryBtn}>
            Submit
          </button>

          <button
            type="button"
            onClick={clearTextBox}
            className={styles.secondaryBtn}
          >
            Clear
          </button>
        </div>
      </form>

      {/* Table */}
      <br />
      <br />

      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.course}</td>
              <td>{item.email}</td>
              <td>
                <button className={myStyles.smallPrimary}>Action</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
