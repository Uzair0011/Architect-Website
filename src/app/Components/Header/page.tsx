import Image from "next/image";
import "./style.css";
export default function Header() {
  return (
    <div>
      <div className="navbar">
        <div className="navlog">
          <Image src="/logo.png" alt="logo" width={70} height={100} />
        </div>
        <div className="navtext">
          <ul className="ulText">
            <li className="outlineB">MAIN</li>
            <li>GALLERY</li>
            <li>PROJECTS</li>
            <li>CERTIFICATION</li>
            <li>CONTACTS</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
