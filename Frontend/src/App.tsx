  import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Datatable from "components/Datatable";

  function App() {
    return (
      <>
      <Navbar />
      <div className="container">
        <h1 className="text-primary">Hello World</h1> 
        
        <Datatable />     
      </div>
      
      <Footer/>
      </>
    );
  }

  export default App;
