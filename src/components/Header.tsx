import "./Header.modules.css";

import IgniteLogo from "../assets/ignite_logo.svg";

export function Header() {
  return (
    <header className="header">
      <img src={IgniteLogo} alt="Logotipo do Ignite" />
    </header>
  );
}
