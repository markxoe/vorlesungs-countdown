import { FC } from "react";
import { useTime } from "./hooks/time";
import { formatShit, getTimeSinceVorlesungsBeginn } from "./utils/time";
import "./index.css";

const App: FC = () => {
  const time = useTime(100);

  return (
    <div className="center">
      <h1>{formatShit(90 * 60 * 1000 - getTimeSinceVorlesungsBeginn(time))}</h1>
    </div>
  );
};

export default App;
