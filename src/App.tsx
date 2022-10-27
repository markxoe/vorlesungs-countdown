import { FC } from "react";
import { useTime } from "./hooks/time";
import {
  formatShit,
  getNextVorlesungsBeginn,
  getTimeSinceLastLectureBegin,
  lectureDuration,
} from "./utils/time";
import "./index.css";

const App: FC = () => {
  const time = useTime(100);

  return (
    <div className="center">
      <div>
        {getTimeSinceLastLectureBegin(time) > lectureDuration ? (
          <>
            <p>Nächste Vorlesung in</p>

            <h1>
              {formatShit(Math.abs(getNextVorlesungsBeginn(time) - time))}
            </h1>
          </>
        ) : (
          <>
            <p>Vorlesung endet in</p>
            <h1>
              {formatShit(lectureDuration - getTimeSinceLastLectureBegin(time))}
            </h1>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
