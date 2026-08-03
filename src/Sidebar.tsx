import { NavLink } from "react-router-dom";


export default function Sidebar() {
    return (
        <aside className="sidebar bg-dark text-white">
            <h3 className="p-3"> Yu Ying Li Wen </h3>
            <nav className="nav flex-column">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `nav-link ${isActive
                            ? "active bg-primary text-white"
                            : "text-white"
                        }`
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        `nav-link ${isActive
                            ? "active bg-primary text-white"
                            : "text-white"
                        }`
                    }
                >
                    Contact
                </NavLink>
            </nav>
        </aside>
    );
}