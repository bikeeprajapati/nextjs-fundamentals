import { NavLinks } from "./nav-links";
import { NavSearch } from "./nav-search";
export const Navbar = () => {
    console.log("Rendering Navbar component");
    return (
        <nav>
            <NavLinks />
            <NavSearch />
        </nav>
    );
}