import { useState } from "react";
import reactLogo from "assets/react.svg";
import viteLogo from "/vite.svg";
import Button from "components/Button/Button";
import ELLLogo from "/ELLLogo.png";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <img src={ELLLogo} alt='Logo' />

      <div className=' w-72 h-11  mb-5 bg-gradient-to-tl bg-slate-50 shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(0,0,0,0.15)] rounded-lg justify-start items-center inline-flex'>
        <input
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-full p-4 bg-transparent border-none outline-none text-gray-500 text-opacity-70 text-base font-medium font-['SF Pro Rounded']"
          placeholder='Email'
        />
      </div>
      <div className=' w-72 h-11 mb-5 bg-gradient-to-tl bg-slate-50 shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(0,0,0,0.15)] rounded-lg justify-start items-center inline-flex'>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full h-full p-4 bg-transparent border-none outline-none text-gray-500 text-opacity-70 text-base font-medium font-['SF Pro Rounded']"
          placeholder='Password'
        />
      </div>
      <Button />
    </div>
  );
}

export default App;
