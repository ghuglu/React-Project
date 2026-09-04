import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [agree, setAgree] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!agree) {
      alert("Please agree to the terms");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify(form)
    );

    alert("Account created successfully!");

    navigate("/login");
  };

  return (
    <>
      <Navbar />

      <div className="auth-container">
        <div className="auth-box">
          <h1>Create Account</h1>
          <p>Join WebTech Practice today</p>

          <form onSubmit={handleSubmit}>
            <div className="name-row">
              <div>
                <label>First Name</label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                />
              </div>

              <div>
                <label>Last Name</label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                />
              </div>
            </div>

            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email"
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter password"
            />

            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
            />

            <div className="checkbox">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />

              <span>I agree to the terms and conditions</span>
            </div>

            <button
              type="submit"
              className="common-btn"
              disabled={!agree}
            >
              Create Account
            </button>
          </form>

          <p className="auth-bottom">
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;