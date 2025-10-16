import InboxGame from "../game/InboxGame";
import CanvasEmp from "./CanvasEmp";

const Game = () => {
  return (
    <CanvasEmp path="game">
      <div style={{ height: '100%', width: '100%' }}>
        <InboxGame />
      </div>
    </CanvasEmp>
  );
};

export default Game;
  