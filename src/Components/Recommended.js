import one from "../assets/image/c1.jpg"
import two from "../assets/image/c2.jpg"

import three from "../assets/image/c3.jpg"
import four from "../assets/image/c4.jpg"




function Recommended()
{
    return(
        <div class="recommended">
        <h1 class="recommended__title">Recommended for you</h1>
        <p>Pick the best fit</p>

        <div class="recommended__container">

            <div class="course-card">
                <img src={one} alt="one"></img>
                <h3>2024 Python Data Visualisazation Masterclass</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>Rs.449 <del>1999</del></p>
            </div>
            <div class="course-card">
                <img src={two} alt="two"></img>
                <h3>Web Development Bootcamp 2024 | Advance</h3>
                <p>Col Steele</p>
                <p>3.2 ⭐⭐⭐</p>
                <p>Rs.449 <del>1999</del></p>
            </div>
            <div class="course-card">
                <img src={three} alt="three"></img>
                <h3>Master UI/UX Designing With Figma</h3>
                <p>Col Steele</p>
                <p>4.8 ⭐⭐⭐⭐</p>
                <p>Rs.449 <del>1999</del></p>
            </div>
            <div class="course-card">
                <img src={four} alt="four"></img>
                <h3>Basic Advance Java Core Training</h3>
                <p>Col Steele</p>
                <p>4.8 ⭐⭐⭐⭐</p>
                <p>Rs.449 <del>1999</del></p>
            </div>

        </div>

    </div>
    )
}

export default Recommended
