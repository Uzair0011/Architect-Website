import Image from "next/image";
import "./style.css";

export default function Contact() {
  return (
    <div className="contactMain">
      {" "}

      <div className="contact">
        <div className="Contact1">Contact Us</div>

        <div className="contactContainer">
          <div className="ContactText">
            <input type="text" placeholder="    Name" className="barSize" />
            <input type="number" placeholder="    Phone" className="barSize" />
            <input type="email" placeholder="    Email" className="barSize" />
            <input
              type="text"
              placeholder="    Interested in"
              className="barSize"
            />
            <input
              type="text"
              placeholder="    Message"
              className="barSize barSize1"
            />
          </div>
          <div className="contactPicture">
            <Image src="/contact.png" alt="contact" width={1000} height={0} />
          </div>
        </div>

        <div className="buttonUp">
     <button className="buttonContact">
        SEND EMAIL
        <div className="buttonArrow">
          <Image src="/A2White.png" alt="arrow" width={24} height={24} />
        </div>
      </button>
     </div>



      </div>
 
    </div>
  );
}
