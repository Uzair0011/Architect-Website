import Image from "next/image";
import "./style.css";

export default function Mission() {
  return (
    <div className="missionMain">
      <div className="missionBox">
        <div className="missionStatement">Main Focus/Mission Statement</div>
        <div className="lorem">
          <div className="loremHead">
            <div className="lorem1">
              <Image src="/001.png" alt="Number" width={64} height={140} />
            </div>
            <p className="loremP">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur, lectus et facilisis placerat.
            </p>
          </div>
          <div className="loremHead">
            <div className="lorem2">
              <Image src="/002.png" alt="Number" width={104} height={140} />
            </div>
            <p className="loremP">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur, lectus et facilisis placerat, magna mauris porttitor
              tortor, a auctor est felis ut nisl.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
