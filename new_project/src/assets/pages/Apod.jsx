import { useReducer, useEffect } from 'react';
import { initialState, reducer } from "../../utils/apodReducer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import Starfield from 'react-starfield';
import Footer from '../components/Footer'; 



const Apod = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=gmKduGKQDPgsOVA5gMoA9CSQTSQJ38bSbMptoAM3')
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      })
      .catch(error => {
        dispatch({ type: 'FETCH_ERROR', payload: error });
      });
  }, []);

  if (state.loading) {
    return (
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-black-500"></div>
      </div>
    );
  }

  if (state.error) {
    return <div>Error: {state.error.message}</div>;
  }

  return (
    <div  className='text-white'>
      
      <div style={{ position: 'absolute', width: '100%', height: '100%' }}>

      <div
        style={{
          position: "fixed",
          zIndex: -1,
        }}

      >
        <Starfield


          starCount={10000}
          starColor={[255, 255, 255]}
          speedFactor={0.05}
          backgroundColor="black"
        />


</div>
      </div>
      

      <h1 className="text-5xl p-5 font-bold mb-9 text-center text-white">
        Astronomy Picture of the Day
      </h1>

      <div className="p-9">
        <img
          src={state.data.url}
          alt={state.data.title}
          className="mx-auto outline outline-offset-2 outline-black-500 p-4 mb-4"
        />

        <h2 className="text-2xl text-center font-semibold mb-9">
          Image: {state.data.title}
        </h2>
        <h3>Image by date: {state.data.date}</h3>
        <br />

        <p>
          {state.data.explanation}
          <div className="flex justify-center items-center mb-4">
            <FontAwesomeIcon
              icon={faCircleInfo}
              className="text-2xl bg-black p-2 rounded-full"
            />
          </div>
        </p>
      </div>

      <Footer/>
    </div>
  );
};

export default Apod;


    