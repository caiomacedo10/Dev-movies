import Logo from '../../assets/logo 2.png';

function Header() {
    return (
        <div>
            <img src={Logo} alt="logo-dev-movies"  style={{width:500}}/>
        </div>
    )
}

export default Header;