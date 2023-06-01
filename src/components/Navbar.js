import navbarStyle from './navbar.module.css'

function Navbar({className}) {
  return (
    <div className={`${navbarStyle.container} ${navbarStyle[className]}`}>
        <div className={navbarStyle.navbar__left}>
        <ul className={navbarStyle.navbar__left__ul}>
                <li className={navbarStyle.navbar__left__ul__li}>apple</li>
            </ul>
        </div>
        
        <div className={navbarStyle.navbar__medium}>
            <ul className={navbarStyle.navbar__medium__ul}>
            </ul>
        </div>
        <div className={navbarStyle.navbar__right}>
            <ul className={navbarStyle.navbar__right__ul}>
                <li className={navbarStyle.navbar__right__ul__li}>apple</li>
                <li className={navbarStyle.navbar__right__ul__li}>banana</li>
                <li className={navbarStyle.navbar__right__ul__li}>orange</li>
            </ul>
        </div>
    </div>
  );
}

export default Navbar;