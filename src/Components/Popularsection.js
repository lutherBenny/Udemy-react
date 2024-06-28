import one from "../assets/image/c1.jpg"
import two from "../assets/image/c2.jpg"
import three from "../assets/image/c3.jpg"
import four from "../assets/image/c4.jpg"
import five from "../assets/image/c5.jpg"
import six from "../assets/image/c6.jpg"
import seven from "../assets/image/c7.jpg"
import eight from "../assets/image/c8.jpg"


function Popularsection()
{
    return(
        <div class="popular">
        <h1 class="popular__title">Most Popular</h1>
        <p>Pick the best fit</p>

        <div class="popular__container">

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

        <div class="course-card">
            <img src={five} alt="five"></img>
            <h3>Basic to Advance java Core Training</h3>
            <p>Col Steele</p>
            <p>4.8 ⭐⭐⭐⭐</p>
            <p>Rs.449 <del>1999</del></p>
        </div>

        <div class="course-card">
            <img src={six} alt="six"></img>
            <h3>Master UI/UX Desiging with Figma</h3>
            <p>Col Steele</p>
            <p>4.8 ⭐⭐⭐⭐</p>
            <p>Rs.449 <del>1999</del></p>
        </div>

        <div class="course-card">
            <img src={seven} alt="seven"></img>
            <h3>Master UI/UX Desiging with Figma</h3>
            <p>Col Steele</p>
            <p>4.8 ⭐⭐⭐⭐</p>
            <p>Rs.449 <del>1999</del></p>
        </div>

        <div class="course-card">
            <img src={eight} alt="eight"></img>
            <h3>Master UI/UX Desiging with Figma</h3>
            <p>Col Steele</p>
            <p>4.8 ⭐⭐⭐⭐</p>
            <p>Rs.449 <del>1999</del></p>
        </div>

    </div>

    </div>
    )
}

export default Popularsection