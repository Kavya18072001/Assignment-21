import "./styling.css";
export default function Filters(props) {
  const handleGenderChange = (e) => {
    const gender = e.target.value;
    props.onGenderChange(gender);
  }
  const handleTrashClick = () => {
    props.onTrashClick();
  }
  
  
  return (
    <div className="header">
      <div>
        <button className="btns" onClick={()=>props. onClickHome()}>Home</button>
        <button className="btns" onClick={()=>props.onStarClick()}>Stared</button>
        <button className="btns" onClick={handleTrashClick}>Trashed</button>
      </div>
      <select  className="select-dropdown" onChange={handleGenderChange}>
        <option value="">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
        <input onChange={props.onSearch} className="search-feild" type="text" placeholder="Search"/>
   
    </div>
  );
}
