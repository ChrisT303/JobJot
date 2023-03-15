import React, { useState } from "react";
import { useGlobalContext } from "../../context/context";
import { FormRow, AlertMessage } from "../../components";

const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useGlobalContext();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [lastName, setLastName] = useState(user?.lastName);
  const [location, setLocation] = useState(user?.location);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !lastName || !location) {
      displayAlert();
      return;
    } 
    updateUser({ name, email, lastName, location });
  };
  

  
  
  return (
    <div className="container mx-auto my-8 px-4 lg:px-0 w-full lg:w-2/3">
      <div className="bg-blue-200 rounded-md shadow-md p-4 lg:p-8 lg:py-6">
        <h3 className="text-2xl text-center sm:text-left mb-4">Profile</h3>
        {showAlert && <AlertMessage />}
        <form
          className="grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3"
          onSubmit={handleSubmit}
        >
          <div className="col-span-1 mb-6 px-2">
            <FormRow
              labelText="Name"
              type="text"
              name="name"
              value={name}
              handleChange={(e) => setName(e.target.value)}
              inputClassName="w-full text-sm md:text-base"
            />
          </div>
          <div className="col-span-1 mb-6 px-2">
            <FormRow
              labelText="Last Name"
              type="text"
              name="lastName"
              value={lastName}
              handleChange={(e) => setLastName(e.target.value)}
              inputClassName="w-full text-sm md:text-base"
            />
          </div>
          <div className="col-span-1 mb-6 px-2">
            <FormRow
              labelText="Email"
              type="email"
              name="email"
              value={email}
              handleChange={(e) => setEmail(e.target.value)}
              inputClassName="w-full text-sm md:text-base"
            />
          </div>
          <div className="col-span-1 mb-6 px-2">
            <FormRow
              labelText="Location"
              type="text"
              name="location"
              value={location}
              handleChange={(e) => setLocation(e.target.value)}
              inputClassName="w-full text-sm md:text-base"
            />
          </div>
          <div className="col-span-1 mb-6 px-2 lg:col-span-3">
            <button
              className="btn px-4 py-2 rounded-md"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
