
import "./CanvasEmp.css";

function CanvasEmp({ path, children }) {
    return (
        <div className={`canvas ${path}`}>
            <div className="canvas-inner">{children}</div>
        </div>
    );
}

export default CanvasEmp;