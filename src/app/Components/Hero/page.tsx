import Image from "next/image";
import "./style.css";
export default function Hero() {
  return (
    <div className="heroMain">
      <div className="hero">
        <div className="bigtext">
          <div className="pro">PROJECT </div>
          <div className="loremSize">Lorem</div>
        </div>

        <div className="secondDivArrow">
          <div className="one">
            <Image src="/A1.png" alt="arrow" width={24} height={24} />
          </div>
          <div className="two">
            <Image src="/A2.png" alt="arrow" width={24} height={24} />
          </div>
        </div>

        <div className="thirdDiv">
          <div className="01">
            <div className="0">0</div>
            <div className="1">1</div>
          </div>
          <div className="line">
            <Image src="/line.png" alt="arrow" width={100} height={100} />
          </div>
          <div className="02">02</div>
        </div>
      </div>

      <div className="building">
        <div className="leftBox">
          <div className="vport">VIEW PROJECT</div>
          <div className="buildingArrow">
            <Image src="/bArrow.png" alt="building" width={100} height={100} />
          </div>
        </div>
      </div>
    </div>
  );
}
