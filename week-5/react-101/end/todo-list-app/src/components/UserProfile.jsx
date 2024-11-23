import React, { useState } from "react";

function UserProfile() {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center h-[100vh] w-[100vh] text-center bg-teal-400">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={profile.name}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={profile.age}
        onChange={handleInputChange}
      />
      <p>
        Profile: {profile.name}, Age: {profile.age}
      </p>
    </div>
  );
}

export default UserProfile;
