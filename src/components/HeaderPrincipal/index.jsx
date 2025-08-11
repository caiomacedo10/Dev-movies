
import { Link, useLocation} from "react-router-dom";



import Logo from '../../assets/logo 2.png';

import { Container,Menu,Li } from "./styles";
import { useEffect, useState } from "react";

function HeaderPrincipal() {
    const [changeBackground, setChangeBackground] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 150) {
                setChangeBackground(true);
            } else {
                setChangeBackground(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Container $changeBackground={changeBackground}>
            <img src={Logo} alt="Logo-dev-movies" />
    
            <Menu>
    
                <Li $isActive={pathname === '/'}>
                    <Link to="/">Home</Link>
                </Li>
    
                <Li $isActive={pathname.includes('filmes')}>
                    <Link to="/filmes">  Filmes  </Link>
                </Li>
    
                <Li $isActive={pathname.includes('series')}>
                    <Link to="/series">  Séries  </Link>
                </Li>
    
            </Menu>
        </Container>
    );
}

export default HeaderPrincipal;