import Header from './Header.jsx'
import Footer from './Footer.jsx'
import ZipCodeSearch from './ZipCodeSearch.jsx'
// import {chart as ChartJS} from "chart.js/auto"; //ths is is for the chart.js 
import {Bar, Doughnut, Line} from "react-chartjs-2"; //Also for the chart.js
import { CopilotKit } from '@copilotkit/react-core';

function App() {

  //function for calling the key
  // const search = async (city) => {
  //   try {
  //       const url = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}';
        
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       console.log(data);
  //   }   catch (error) {
      
  //   }
  // }
  //if this is causing problems, delete from there to the up comment

  return(
    
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}>
      
      <div style={{
        paddingBottom: '1.8rem', // Optional: more space below
        width: '100vw', // 100% of the viewport width
        height: 90,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <img 
          src="/elpasologo.png" 
          alt="A cool image" 
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            width: '200px',
            height: 'auto'
          }} 
        />
        <img 
          src="/__102c84-removebg-preview.png" 
          alt="A cool image" 
          style={{
            position: 'absolute',
            top: '10px',
            right: '8px',
            width: '100px',
            height: 'auto'
          }} 
        />
        <Header />
      </div>
    
        {/* Middle area */}
        <div style={{
          flexGrow: 1,         // Takes the extra space
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '4.5rem',   // Move ZipCodeSearch down a little
        }}>
          <ZipCodeSearch />
        </div>
    
        <Footer />
    </div>
  )
}

export default App
