          import Footer from "components/Footer";
        import Navbar from "components/Navbar";
        import Datatable from "components/Datatable";
        import BarChart from "components/Barchart";
        import DonutChart from "components/Donutchart";
    

          function App() {
            return (
              <>
              <Navbar />
              <div className="container">
                <h1 className="text-primary py-3">Sales Dashboard</h1>  

                <div className="row px-3">
                    <div className="col-sm-6">
                      <h5 className="text-center text-secondary">Succcess Rate (%)</h5>
                      <BarChart/>
                    </div>
                    <div className="col-sm-6">
                      <h5 className="text-center text-secondary">All Sales</h5>
                      <DonutChart/>
                    </div>
                </div>  

                <div className="py-3">
                  <h2 className="text-primary">All Sales</h2>
                  </div>        
                <Datatable />     
              </div>
              
              <Footer/>
              </>
            );
          }

          export default App;
