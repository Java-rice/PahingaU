// src/pages/register/Register.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import registerBG from "../../assets/registerBG.png";
import largeLogo from "../../assets/largeLogo.png";
import { Button } from "../../components/buttons/Button";

const Register = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      <div
        className="flex items-center font-poppins justify-center h-auto pt-[2%] pb-[10%] bg-cover bg-center"
        style={{ backgroundImage: `url(${registerBG})` }}
      >
        <div className="w-auto m-auto flex flex-col items-center justify-center text-center">
            <img src={largeLogo} width={500} height={450} alt="PahingaU Logo" />
            <div>
                <h1 className="text-6xl font-bold text-white my-5">PahingaU</h1>
                <p className="text-xl font-regular text-white mt-5">Your Trusted Guide to Student Living in Metro Manila.</p>
                <p className="text-xl font-regular text-white mb-5">Simplify Your Search, Secure Your Stay.</p>
            </div>
            <div className="flex flex-row gap-5">
                <Button variant="soft" onClick={() => handleNavigation("/login")}>Log In</Button>
                <Button variant="nocolor" onClick={() => handleNavigation("/student-register")}>Student Register</Button>
                <Button variant="nocolor" onClick={() => handleNavigation("/landlord-register")}>Landlord Register</Button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Register;
