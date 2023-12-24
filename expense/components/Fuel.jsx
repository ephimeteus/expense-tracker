const Fuel = () => {
    
    ///////mock values, should be stored
    let lastTank = 12;
    const lastOdo = 6600;
    const thisMonthKm = 1000;
    const thisMonthFuel = 30;
    ///////////////////////
    //let tank = 11.9; //this should be an imput
    const odo = 6900;  //this should be an imput
    const kmRun = (odo - lastOdo).toFixed(1);
    const kmRunPerLiter = (kmRun / lastTank).toFixed(1);
    const thisMonthKmPerLiter = (thisMonthKm / thisMonthFuel).toFixed(1);
   
    
    return (
        <>
            <h2>Fuel</h2>
            <div className="new-inputs">
                <input 
                    type="number"
                    id="new-load" 
                    name="load"
                    placeholder="Fuel"
                    required minLength="1" 
                    maxLength="8"
                    size="8"
                />
                <input 
                    type="number"
                    id="odo-read" 
                    name="load"
                    placeholder="ODO"
                    required minLength="1" 
                    maxLength="8"
                    size="8"
                />
           </div>
           <button>Load</button>
            <div className="fuel">
                <div className="prev-tank">
                    <h4>Prev. Tank</h4>
                    <p>Fuel: { lastTank } L</p>
                    <p>Km run: { kmRun } Km</p>
                    <p>Km/liter: { kmRunPerLiter } Km/L</p>
                </div>
                <div className="this-month">
                    <h4>This month</h4>
                    <p>Fuel: { thisMonthFuel } L</p>
                    <p>Km run: { thisMonthKm } Km</p>
                    <p>Km/liter: { thisMonthKmPerLiter } Km/L</p>
                </div>
            </div>
        </>
    
    )
};

export default Fuel;