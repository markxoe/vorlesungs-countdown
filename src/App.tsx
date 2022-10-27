import { FC } from "react";
import { useTime } from "./hooks/time";
import { formatShit, getTimeSinceVorlesungsBeginn } from "./utils/time";

const App: FC = () => {
  const time = useTime(100);

  return (
    <>
      <h1>{formatShit(90 * 60 * 1000 - getTimeSinceVorlesungsBeginn(time))}</h1>
    </>
  );
};

export default App;
