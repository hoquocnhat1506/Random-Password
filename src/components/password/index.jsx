import { useState } from "react";
import style from "./style.module.css";

function Password() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(20);
  const [useSymbols, setUseSymbols] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useLowerCase, setUseLowerCase] = useState(true);
  const [useUpperCase, setUseUpperCase] = useState(true);

  const generatePassword = () => {
    let charset = "";
    let newPassword = "";

    if (useSymbols) charset += "!@#$%^&*()";
    if (useNumbers) charset += "0123456789";
    if (useLowerCase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (useUpperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < passwordLength; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setPassword(newPassword);
  };

  return (
    <form>
      <div className={style.title}>PASSWORD GENERATOR</div>
      <div className={style.text}>
        Create strong and secure passwords to keep your account safe online.
      </div>
      <div className={style.boxinput}>
        <input type="text" value={password} readOnly />
        <svg
          onClick={generatePassword}
          className={style.icoin1}
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline points="23 4 23 10 17 10"></polyline>
          <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
        </svg>
        <button>
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="button-icon"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 4a2 2 0 0 1 2-2h10l4 4v10.2a2 2 0 0 1-2 1.8H8a2 2 0 0 1-2-2Z"></path>
            <path d="M10 2v4h6"></path>
            <path d="M18 18v-7h-8v7"></path>
            <path d="M18 22H4a2 2 0 0 1-2-2V6"></path>
          </svg>
          <div className={style.textbutton}>Copy</div>
        </button>
      </div>
      <div className={style.length}>
        {passwordLength <= 6 ? "Too short" : "Hard"}
      </div>
      <div className={style.password}>
        <div className={style.passwordlength}>
          Password Length:
          <span>
            <input
              className={style.number}
              type="number"
              min="1"
              max="20"
              value={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
            />
          </span>
        </div>
        <input
          type="range"
          min="1"
          max="20"
          value={passwordLength}
          onClick={generatePassword}
          onChange={(e) => setPasswordLength(e.target.value)}
        />
      </div>
      <div className={style.setting}>
        <ul>
          <li className={style.choose}>
            <label>Uppercase</label>
            <input
              type="checkbox"
              checked={useUpperCase}
              onChange={() => setUseUpperCase(!useUpperCase)}
            />
          </li>
          <li className={style.choose}>
            <label>Lowercase</label>
            <input
              type="checkbox"
              checked={useLowerCase}
              onChange={() => setUseLowerCase(!useLowerCase)}
            />
          </li>
          <li className={style.choose}>
            <label>Numbers</label>
            <input
              type="checkbox"
              checked={useNumbers}
              onChange={() => setUseNumbers(!useNumbers)}
            />
          </li>
          <li className={style.choose}>
            <label>Special Characters</label>
            <input
              type="checkbox"
              checked={useSymbols}
              onChange={() => setUseSymbols(!useSymbols)}
            />
          </li>
        </ul>
      </div>
    </form>
  );
}
export default Password;
