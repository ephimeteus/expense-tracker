import Header from "../components/Header";
import Fuel from "../components/Fuel";
import Pending from "../components/Pending";

const App = () => {
 const vehicle = {
  name:'Kawasaki Ninja 400', 
  year: 2022,
  plate:'ALB 2044',
  };

  return (
    <>
      <Header 
        name={vehicle.name} 
        year={vehicle.year} 
        plate={vehicle.plate} 
      />
      <Fuel />
      <Pending />
    </>
  );
};

export default App;
