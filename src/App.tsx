import { FC } from "react";
import { useTime } from "./hooks/time";
import {
  formatShit,
  getNextLectureBegin,
  getTimeSinceLastLectureBegin,
  lectureDuration,
} from "./utils/time";
import "./index.css";

const App: FC = () => {
  const time = useTime(500);

  return (
    <div className="center">
      <div>
        {getTimeSinceLastLectureBegin(time) > lectureDuration ? (
          <>
            <p>Nächste Vorlesung in</p>

            <h1>{formatShit(getNextLectureBegin(time) - time)}</h1>
          </>
        ) : (
          <>
            <p>Vorlesung endet in</p>
            <h1>
              {formatShit(lectureDuration - getTimeSinceLastLectureBegin(time))}
            </h1>
            <progress
              value={
                1 -
                (lectureDuration - getTimeSinceLastLectureBegin(time)) /
                  lectureDuration
              }
              max={1}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
