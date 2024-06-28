function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__s1">
                <h1 className="navbar__s1__title">Udemy</h1>
            </div>
            <div className="navbar__s2">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="search for anything here. Tech, business, Art...."></input>
            </div>
            <div className="navbar__s3">
                <p>Trending Courses</p>
            </div>

            <div className="mylearning">
                <p>My Learning</p>
                <div className="mylearning__popup">
                    <p>You did not purchase anything yet</p>
                </div>
            </div>
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-solid fa-bell"></i>
            <i className="fa-solid fa-user"></i>
            <i className="fa-solid fa-bars"></i>
        </div>
    );
}

export default Navbar;

