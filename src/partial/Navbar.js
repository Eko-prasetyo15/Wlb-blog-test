import React from "react"
import { Link } from "react-router-dom"
import routes from "../routes"
import "./navbar.css"
const Navbar = () => {
    return (
        <nav role="navigation" className="primary-navigation mb-5">
            <ul>
                {routes.map((e, i) => {
                    return (
                        <Link to={e.path}>
                            <li>{e.name}</li>
                        </Link>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar