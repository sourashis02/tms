import Header from './firstpagecomponent/header/Header';
import Footer from './firstpagecomponent/footer/Footer';
import './App.css';
import './bootstrap.min.css'

function App() {
  return (
    <>
      <Header />
      <form className="inputForm">
          <div className='inputFP'>
            <div className='form-group inputFP_child'>
              <input type="name" className="form-control" id="name" placeholder="Enter Your Name" />
              <small id="nameHelp" className="form-text text-muted">We'll never share details with anyone else.</small>
            </div>
            <div className='control'>
              <button type="button" className="btn btn-primary btn-lg lbutton">Submit</button>
            </div>
          </div>
      </form>
      <Footer />
    </>
  );
}

export default App;
