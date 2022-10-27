import { FC } from "react";
import { useTime } from "./hooks/time";
import { formatShit, getVorlesungsbeginn } from "./utils/time";

const App: FC = () => {
  const time = useTime(100);

  return (
    <>
      <h1>{formatShit(90 * 60 * 1000 - getVorlesungsbeginn(time))}</h1>
    </>
  );
};

export default App;
