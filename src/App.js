import './App.css';
import imgDesktop from '../src/assets/images/image-header-desktop.jpg';
import imgMobile from '../src/assets/images/image-header-mobile.jpg';

function App() {
  return (
    <div className="flex items-center h-screen">
      <div className='container-md mx-auto bg-indigo-950 rounded-md'>
        <div className="columns-1 md:columns-2 flex flex-col md:flex-row">
          <section className='flex flex-col p-11 max-w-lg text-center md:text-start order-last md:order-first justify-center'>
            <h1 className='text-white'>Get <span className='text-purple-500'>insights</span> that help your business grow.</h1>
            <p className='mt-5'>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
            <div className='mt-10 columns-3md gap-10 flex flex-col md:flex-row text-center'>
              <div>
                <p className="text-white font-bold text-2xl">10k+</p>
                <p className='text-xs text-opacity-70 uppercase'>Companies</p>
              </div>
              <div>
                <p className="text-white font-bold text-2xl">314</p>
                <p className='text-xs text-opacity-70 uppercase'>templates</p>
              </div>
              <div>
                <p className="text-white font-bold text-2xl">12M+</p>
                <p className='text-xs text-opacity-70 uppercase'>Queries</p>
              </div>
            </div>
          </section>
          <section className='order-first md:order-last'>
            <img src={imgDesktop} className='hidden md:block img-color rounded-r-md' alt="" />
            <img src={imgMobile} className='md:hidden img-color rounded-r-md' alt="" />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
