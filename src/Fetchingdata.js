import { useEffect, useState } from "react";
import Users from "./Home";
import Filters from './filters';


export default function Fetchdata() {
  const [userdetails, setuserdetails] = useState([]);//to store data from backend
  const [genderFilter, setGenderFilter] = useState('');
  const [inputValue,setInput]=useState('');
  const [trasheData,setTrash]=useState([])
  const [starredData ,setStaredData]=useState([])
  

  let filteredData = userdetails;//copying the userdetails
  //fetching the data from api
  const fetchdata = () => {
    return fetch("https://mocki.io/v1/d1f16339-9aec-4696-b302-7fd0cb0db28b")
      .then((response) => response.json())
      .then((data) => setuserdetails(data)); //updating the userdetails  with fetched data
  };
  function handleDelete(id) {
    const updatedData = userdetails.filter((item) => item.id !== id);
    setuserdetails(updatedData);
    const deletedItem = userdetails.find((item) => item.id === id);// finding the object in userdetails array which has the same id as the id passed as an argument to the handleDelete function.
    setTrash([...trasheData, deletedItem]);
  }
 function handleStar(id){
  const  primiumData=userdetails.find((item)=>item.id===id)
  if(starredData.includes(primiumData))
  {
    setStaredData([...starredData])
  }
  else{
    setStaredData([...starredData ,primiumData])
  }
  
 }
 console.log(starredData)

  const handleGenderChange = (gender) => {
    setGenderFilter(gender);
  }
  const handleSearch=(event)=>{
    setInput(event.target.value)
  }
  const handleTrashClick = () => {
    setuserdetails(trasheData);
    
  };
 const handleStarredData =()=>{
  setuserdetails(starredData)
 }
 const handleHomeData=()=>{
  const updatedData = userdetails.filter((item) => item.id !== id);
  setuserdetails(updatedData);
 } 
 
  if (genderFilter) {
    filteredData = filteredData.filter(item => item.gender === genderFilter);
  }
  if(inputValue){
    filteredData = filteredData.filter(item => (item.first_name.toLowerCase().includes(inputValue.toLowerCase())||(item.last_name.toLowerCase().includes(inputValue.toLowerCase())||(item.last_name.toLowerCase().includes(inputValue.toLowerCase())))));
  }
    
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div>
       <Filters onGenderChange={handleGenderChange} onSearch={handleSearch} onTrashClick={handleTrashClick}  onClickHome={handleHomeData} onStarClick={handleStarredData}/>
       <Users usersdata={filteredData}  onDelete={handleDelete}  onStar={handleStar}/>
    </div>
   
  );
 
}
