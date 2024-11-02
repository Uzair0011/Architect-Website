import Image from "next/image";
import "./style.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="logoFooter">
        <Image src="/footerLogo.png" alt="logo" width={145} height={94} />
      </div>

      <ul className="ul1">
        <p>
          <b>Information</b>
        </p>
        <li className="list1">Main</li>
        <li className="list1">Gallery</li>
        <li className="list1">Project</li>
        <li className="list1">Certification</li>
        <li className="list1">Contacts</li>
      </ul>

      <ul className="ul1">
        <p>
          <b>Contact</b>
        </p>
        <div className="space">
          <div className="logo3">
            <div className="logoSmall">
              <Image src="/Ad1.png" alt="icon" width={11} height={16} />
            </div>
            <p>
              1234 Sample Street <br /> Austin Texas 78704
            </p>
          </div>
          <div className="logo3">
            <div className="logoSmall">
              <Image src="/Ad2.png" alt="icon" width={11} height={16} />
            </div>

            <p>512.333.2222</p>
          </div>
          <div className="logo3">
            <div className="logoSmall">
              <Image src="/Ad3.png" alt="icon" width={16} height={16} />
            </div>

            <p>sampleemail@gmail.com</p>
          </div>
        </div>
      </ul>

      <div className="socialMedia">
        <div className="social">
          <b>Social Media</b>
        </div>
        <div className="socialFooter">
          <Image src="/f1.png" alt="logo" width={10} height={19} />
          <Image src="/f2.png" alt="logo" width={16} height={19} />
          <Image src="/f3.png" alt="logo" width={16} height={19} />
          <Image src="/f4.png" alt="logo" width={16} height={19} />
        </div>
      </div>
    </div>
  );
}
