import { BoxComponent } from "./components/BoxComponent";
import { cardsConfiguration } from "./utils/cardsconfiguration";


const All = () => {
    return ( 
        <div className="all">
        <button>See All Services</button>
        </div>
     );
}

function Home() {
    return (
        <div>
            <div className="page">
                <img src="https://register-karo-front-end-development-internship-website.vercel.app/poster.png" />
            </div>
            <div className="wel">
                <h1>WELCOME TO AMAZON.IN</h1>
                <div style={{textAlign:'center'}}><i class='bx bx-down-arrow-circle'></i></div>
                <h2>Explore Our Services</h2>
            </div>
            <div className="services-card-cont">
                {cardsConfiguration.map((card)=>{
                    return <BoxComponent headText={card.headText} description={card.description} iconClass={card.iconClass} />
                })}
            </div>
            <All/>
           
        </div>
        
      );
}

export default Home;