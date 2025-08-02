import Image from "next/image";
import logo from "../../public/assets/images/logo.png";

function Header() {
  return (
    <div className="fixed h-36 flex items-center justify-start pl-9 z-50 top-0 left-0 w-full">
      <Image src={logo} width={100} height={100} alt="logo" className="h-full w-auto" />
    </div>
  );
}

export default Header;
