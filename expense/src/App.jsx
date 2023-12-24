import Header from "../components/Header";
import Fuel from "../components/Fuel";
import Pending from "../components/Pending";

const App = () => {
 const odoRead = 7100;
  return (
    <>
      <Header 
        name={'Kawasaki Ninja 400'} 
        year={2022} 
        plate={'ALB 2044'} 
        odo={odoRead}
      />
      <Fuel />
      <Pending />
    </>
  );
};

export default App;
