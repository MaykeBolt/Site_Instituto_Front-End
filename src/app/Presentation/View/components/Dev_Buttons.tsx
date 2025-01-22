import { NavLink } from "react-router";
import "./Dev_Buttons.css"

export default function Dev_Buttons() {
    return (
        <>
          <div className="space-x-4">
            <button className="button">
                <NavLink to="/cadastro"> Cadastro </NavLink>
            </button>

            <button className="button">
                <NavLink to="/login"> Login </NavLink>
            </button>
          </div>
        </>
    )
}