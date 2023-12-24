const Header = ({ name, year, plate, odo }) => {
  return (
    <div className="header">
      <h1>{ name }</h1>
      <p>Year: { year }</p>
      <p>Plate: { plate }</p>
      <p>ODO: { odo } Km</p>
    </div>
  )
};

export default Header;