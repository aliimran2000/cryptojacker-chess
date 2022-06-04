import logo from "./logo.svg";
import "./App.css";
import { Chessboard } from "react-chessboard";
import mySvg from "./wave.svg";
export default function App() {
  return (
    <div style={{ backgroundImage: `url(${mySvg})`, height: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Chessboard id="BasicBoard" />
      </div>
    </div>
  );
}
