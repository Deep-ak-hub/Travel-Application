import { SITE_NAME } from "../../config/constants";

export default function LogoText() {
  return (
    <>
      <span className="font-bold text-lg text-text tracking-tight">
        {SITE_NAME}
      </span>
    </>
  );
}
