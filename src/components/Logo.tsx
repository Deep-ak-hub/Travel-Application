import { Link } from "react-router-dom";
import Icon from "./LogoComponent/Icon";
import LogoText from "./LogoComponent/LogoText";

export default function Logo() {
  return (
    <>
      <Link to="/" className="flex items-center gap-2.5 shrink-0">
       <Icon />
       <LogoText /> 
       
      </Link>
    </>
  );
}
