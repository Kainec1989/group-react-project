import { useContext,useEffect,useState } from 'react';
import Starfield from "react-starfield";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleInfo} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer"
import { MyContext } from "../components/ContextProvider";


export default function Apod() {
    const [apodData, setApodData] = useState(null);
    
    useEffect(() => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=gmKduGKQDPgsOVA5gMoA9CSQTSQJ38bSbMptoAM3`)
          .then(response => response.json())
          .then(data => {
            console.log('APOD data:', data); 
            setApodData(data);
          })
          .catch(error => {
            console.error('Opppps,There was an ERROR fetching the Astronomy picture of day', error);
          });
      }, []); 


      const { setPage } = useContext(MyContext);
      useEffect(() => {
        setPage("Apod");
      }, []);


return(
    <div className=" text-white min-h-screen flex flex-col justify-between position" >

<div style={{
          position: "fixed",
          zIndex: -1,
        }}>
          <Starfield
          starCount={10000}
          starColor={[255, 255, 255]}
          speedFactor={0.05}
          backgroundColor="black"
        />
        </div>
        <Navbar/>        

<h1 className="text-5xl p-5 font-bold mb-9 text-center ">Astronomy Picture of the Day</h1>

      
<div >

 {apodData ? (
        <div className=" p-9 ">
          
          <img src={apodData.url} alt={apodData.title}  class="mx-auto outline outline-offset-2 outline-black-500 p-4 mb-4  " />
          
          <h2 className="text-2xl text-center font-semibold mb-9 " >Image: {apodData.title}</h2>
          <h3 className=" ">Image by date:  {apodData.date}</h3>
          <br />
        
     
          <p className=" "  >{apodData.explanation} <div className="flex justify-center items-center mb-4">
          <FontAwesomeIcon icon={faCircleInfo} className="text-2xl bg-black p-2 rounded-full" />
          </div></p>
        
        </div>
      ) : (
        <div className="flex justify-center items-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-black-500"></div>
                    </div>
      )}
    </div>
<div className="" >

<div className=" pt-60">
                <Footer />
            </div>   

 </div>  
    </div>
)


}