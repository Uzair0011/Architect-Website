import Image from "next/image";
import "./style.css";

export default function OurProjects() {
  return (
    <div className="ourProjects">
      <div className="projectContainer">
        <div className="projectText">Our Projects</div>
        <div className="imagesAll">
          <div className="boxesAll">
            <div className="box1 ">
              <div className="sampleProject">
                <div className="spanSize">Sample</div>
                <div className="spanSize">Project</div>
              </div>
            </div>
            <div className="box1 ">
              <Image src="/b2.png" alt="pic" width={590} height={300} />
            </div>
          </div>

          <div className="boxesAll2">
            <div className="box3 ">
              <Image src="/b3.png" alt="left pic" width={1000} height={1000} />
            </div>
            <div className="box4 ">
              <Image src="/b4.png" alt="center" width={1000} height={1000} />
            </div>
            <div className="box5 ">
              <Image src="/b5.png" alt="last image" width={1000} height={1000} />
            </div>
          </div>
        </div>
        <div className="buttonDiv">
          <div className="buttonEnd">
            <button>All Projects</button>
            <div>
              <Image src="/A2.png" alt="arrow" width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
