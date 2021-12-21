import Header from './firstpagecomponent/header/Header';
import Footer from './firstpagecomponent/footer/Footer';
import './App.css';
import './bootstrap.min.css'

function App() {
  return (
    <>
      <Header />
      <form>
        <fieldset>
          <div className='inputFP col'>
            <div className='form-group inputFP_child'>
              <label for="exampleInputEmail1" class="form-label mt-4">Name</label>
              <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
              <small id="emailHelp" class="form-text text-muted">We'll never share details with anyone else.</small>
            </div>
            <div>
              <button type="button" class="btn btn-primary btn-lg lbutton">Submit</button>
            </div>
          </div>
        </fieldset>
      </form>
      <Footer />
    </>
  );
}

export default App;
