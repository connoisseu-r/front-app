import "../NavBar.css"


function BasicNavBar() {
  return (
    <nav className="grid">
      <ul>
        <li className="fullwidth"><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Log in</a></li>


      </ul>
    </nav>

  );
}

export default BasicNavBar;