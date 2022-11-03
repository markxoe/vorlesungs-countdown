import { FC } from "react";
import { useTime } from "./hooks/time";
import {
  formatShit,
  getNextLectureBegin,
  getTimeSinceLastLectureBegin,
  lectureDuration,
} from "./utils/time";
import "./index.css";
import Confetti from "react-confetti";

const confettiRunFor = 3 * 1000; // 5 seconds

const App: FC = () => {
  const time = useTime(500);

  const timeSinceLastLectureBegin = getTimeSinceLastLectureBegin(time);

  return (
    <div className="center">
      <Confetti
        numberOfPieces={
          (timeSinceLastLectureBegin > lectureDuration / 2 &&
            timeSinceLastLectureBegin < lectureDuration / 2 + confettiRunFor) ||
          (timeSinceLastLectureBegin > lectureDuration &&
            timeSinceLastLectureBegin < lectureDuration + confettiRunFor)
            ? 200
            : 0
        }
      />
      <div>
        {timeSinceLastLectureBegin > lectureDuration ? (
          <>
            <p>Nächste Vorlesung in</p>

            <h1>{formatShit(getNextLectureBegin(time) - time)}</h1>
          </>
        ) : (
          <>
            <p>Vorlesung endet in</p>
            <h1>{formatShit(lectureDuration - timeSinceLastLectureBegin)}</h1>
            <progress
              value={
                1 -
                (lectureDuration - timeSinceLastLectureBegin) / lectureDuration
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
