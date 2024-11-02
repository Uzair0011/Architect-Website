import Image from "next/image";
import "./style.css";
export default function About() {
  return <div className="about-main">
    <div className="aboutChild">

      <div className="picture1">
        <div className="p1">
        <Image src="/1.png" alt="picture" width={1000} height={0} />

        </div>
        <div className="p2">
        <Image src="/2.png" alt="picture" width={1000} height={0} />

        </div>
      </div>

      <div className="picture2">
        <div className="p3">
        <Image src="/3.png" alt="picture" width={1000} height={0} />

        </div>
      </div>

      <div className="aboutTextHeading">
        <div className="aboutText">About</div>
        <p className="aboutPara">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <button className="buttonAbout" >Read More 
          <div className="buttonArrow">
          <Image src="/A2.png" alt="arrow" width={24} height={24}
         />
          </div>
       

        </button>
      </div>
    </div>
  </div>;
}
