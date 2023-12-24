const Header = ({ name, year, plate}) => {
  return (
    <div className="header">
      <h1>{ name }</h1>
      <p>Year: { year }</p>
      <p>Plate: { plate }</p>
    </div>
  )
};

export default Header;