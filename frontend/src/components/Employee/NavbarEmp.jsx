import { Link } from "react-router-dom";
import "./NavbarEmp.css";

function NavbarEmp({ path }) {
    return (
        <div className={`navbarcontainer ${path}`}>
            <Link to="/dashboard">
                <div className={`btn dashboardb ${path === "dashboard" ? "dashboard" : ""}`}>
                    <img className="navicon" src="/assets/dashboardicon.png"/>
                </div>
            </Link>
            <Link to="/quiz">
                <div className={`btn ${path === "quiz" ? "quiz" : ""}`}>
                    <img className="navicon"  src="/assets/quizicon.png"/>
                </div>
            </Link>
            <Link to="/game">
                <div className={`btn gameb ${path === "game" ? "game" : ""}`}>
                    <img className="navicon"  src="/assets/gameicon.png"/>
                </div>
            </Link>
            <Link to="/slipups">
                <div className={`btn slipupsb ${path === "slipups" ? "slipups" : ""}`}>
                    <img className="navicon"  src="/assets/slipupsicon.png"/>
                </div>
            </Link>
            <Link to="/">
                <div className="btn logoutb">
                    <img className="navicon"  src="/assets/logouticon.png"/>
                </div>
            </Link>
        </div>
    );
}

export default NavbarEmp;
