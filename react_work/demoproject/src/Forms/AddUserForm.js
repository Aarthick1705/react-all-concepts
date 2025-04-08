import { useState } from "react";

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormState);
  const [errors, setErrors] = useState({ name: "", username: "" });

  
  const alphabetRegex = /^[A-Za-z\s]+$/;


  const validateForm = () => {
    const newErrors = { name: "", username: "" };

    if (!user.name) {
      newErrors.name = "Name is required";
    } else if (!alphabetRegex.test(user.name)) {
      newErrors.name = "invailid characters";
    }
    if (!user.username) {
      newErrors.username = "Username is required";
    } else if (!alphabetRegex.test(user.username)) {
      newErrors.username = "invailid characters";
    } else if (props.users.some((existingUser) => existingUser.username === user.username)) {
      newErrors.username = "Username is already taken";
    }

    setErrors(newErrors);
    return !newErrors.name && !newErrors.username;
  };

 
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      props.addUser(user);
      setUser(initialFormState); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
          className={errors.name ? "input-error" : ""}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>

      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleInputChange}
          className={errors.username ? "input-error" : ""}
        />
        {errors.username && <span className="error">{errors.username}</span>}
      </div>

      <button type="submit" className="btn btn-outline-success">
        Add new user
      </button>
    </form>
  );
};

export default AddUserForm;
