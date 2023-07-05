
import './index.css';
import  backgroundImage from './Image/banner.jpg';
import live from './Image/live.png';
import league from './Image/leaguetable.png';
import livescore from './Image/livescore.jpg'

function App() {
  const styles = {
      backgroundImage: `url(${backgroundImage})`,
      /* additional background properties */
    };
  return (
    <div className="App">
      <header  className='bg-blue-800 '>
        <div className='flex p-4 justify-center'>
          <div className='pr-6 text-yellow-50'><a href="https://footballlive-three.vercel.app/">DEMO</a> </div>
          <div className='pr-6 text-yellow-50'><a href="#features">FEATURES</a> </div>
          <div className='pr-6 text-yellow-50'><a href="#about">ABOUT</a> </div>
        </div>
      </header>
      <section style={styles}  className='bg-contain bg-center h-full pb-12'>
        <div className=' text-center pt-12 text-neutral-400 text-8xl font-mono font-semibold'>FOOTBALL LIVE </div>
        <span className='text-center text-white mx-auto flex justify-center'>Stay up-to-date with live match commentaries, score updates, and detailed post-match reviews that capture the excitement and drama of the beautiful game. </span>
        <button className='lg:mt-96 text-center justify-items-center mx-auto flex bg-slate-100 rounded py-4 px-7 font-mono font-medium'>DEMO</button>
      </section>
      <section className='bg-slate-400' id='features'>
        <div className='text-center text-white text-lg pt-7 pb-10'>KEY FEATURES</div>
        <div className='lg:flex grid mx-auto justify-center gap-10'>
          <div className='w-64 text-center'>
            <div><img src={live} alt="Live" /> </div>
            <div className=''>
              <h1 className='text-center  font-bold text-red-600'>Watch Live match</h1>
              <span>Welcome to our Live Match Description feature, where you can experience the excitement of football in real-time</span>
            </div>
          </div>
          <div className='w-64 text-center pt-6'>
            <div><img src={league} alt="Live" /> </div>
            <div className=''>
              <h1 className='text-center font-bold text-red-600'>League Table</h1>
              <span> As you scroll down the table, you'll find teams battling for mid-table positions. These teams have had a mix of wins, draws, and losses, and their goal differences may vary.</span>
            </div>
          </div>
          <div className='w-64 text-center pt-6 '>
            <div><img src={livescore} alt="Live" /> </div>
            <div className=''>
              <h1 className='text-center pt-6  font-bold text-red-600'>Live score Update</h1>
              <span>As matches kick off, our LiveScore descriptions provide instant updates on goals, assists, and other noteworthy events. We keep you informed about which player scored and the minute it occurred, ensuring you're always up to date with the latest developments. </span>
            </div>
          </div>
          
         
        </div>

      </section>
      <section>
        <div className='text-center pt-6  font-bold text-red-600' id='about' >About Football Live</div>
        <div className='text-center w-2/4 mx-auto'>"As a passionate football fan, My love for the sport and the desire to share your enthusiasm with others also have driven  me to create a platform where fellow fans can come together to stay updated and updates.<br></br>I have noticed a lack of comprehensive and reliable football update sources that cater to your specific interests and preferences. Creating a website allows you to bridge this gap and offer a platform that delivers the type of content you believe football enthusiasts like yourself are seeking."<br /> <span className='text-center mx-auto' >-Joshua Ajigbotosho, Developer</span></div>
        
      </section>
      <footer className='bg-blue-800 py-6 mt-5'>
        <div className='flex justify-center gap-8'>
        <div ><a href="https://www.linkedin.com/in/joshua-olamiposi/">LinkedIn</a> </div>
        <div> <a href="https://github.com/Possible-generation/footballlive">Project</a> </div>
        <div> <a href="https://github.com/Possible-generation"> Github</a></div>
        </div>
        <div className='flex justify-center'>&copy; 2023 Footballlive. all rights reserved</div>
      </footer>
    </div>
  );
}

export default App;
