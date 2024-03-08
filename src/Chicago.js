import owners_A from "../src/assets/Mario_and_Adrian_A.jpg";
import owners_B from "../src/assets/Mario_and_Adrian_B.jpg";
function Chicago(){
    return(
        <div className="about-section">
            <p className="title yellow">Little Lemon</p>
            <p className="subtitle green">Chicago</p>
            <p className="paragraph black">Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12–15 items that they rotate seasonally. The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.</p>
            <br/>
            <p className="paragraph black">Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.</p>
            <div className="about-img-container">
                <img src={owners_A} alt="Mario and Adrian" class="about-img"/>
                <img src={owners_B} alt="Mario and Adrian" class="about-img"/>
            </div>
        </div>
    )
};

export default Chicago;