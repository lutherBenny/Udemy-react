import sale from "../assets/image/sale1.jpg"


function Saleimage()
{
    return(
        <div className="sale-image">

       <img src={sale} alt="sale"></img>
        <div class="sale__image__offer">
            <h2>Udemy sale! 24 hours to save.</h2>
            <p>Get the top courses for just 499.just one day to save but a life time to learn.</p>

        </div>

    </div>
    )
}
export default Saleimage

