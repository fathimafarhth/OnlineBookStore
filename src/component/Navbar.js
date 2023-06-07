import React, { useState } from "react";

const Navbar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchTerm);
    setSearchTerm("");
  };

  return <nav className="navbar"></nav>;
};

export default Navbar;
