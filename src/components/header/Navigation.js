import { Navbar, NavbarBrand } from 'reactstrap';

const Navigation = () => {
    return (
        <Navbar dark color="dark">
            <div className="container">
                <NavbarBrand href="/">Aharika</NavbarBrand>
            </div>
        </Navbar>
    );
}

export default Navigation;