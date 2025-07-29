import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import './ListFood';
import { deleteFood, getFoodList } from '../../services/foodService';

const ListFood = () => {
  const [list, setList] = useState([]);
  const fetchList = async () => {
    try {
      const data = await getFoodList();
      setList(data);
    } catch (error) {
      toast.error("Error while geting the feching the data");
    }
  }
  const removeFood = async (foodId) => {
try {
  
 const succes=await deleteFood(foodId);
 if(succes){
  toast.success("Food Removed");
 await fetchList();
 }else{
   toast.error("Error occured while removing the Food");
 }
} catch (error) {
  toast.error("Error occured while removing the Food");

}
  }
  useEffect(() => {
    fetchList();
  }, [])
  return (
    <div className="py-5 row justify-content-center">
      <div className="col-11 card">
        <table className='table'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              list.map((item, index) => {
                return (
                  <tr key={index}> <td>
                    <img src={item.imageURL} alt="" height={48} width={48} />
                  </td>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>₹{item.price}.00</td>
                    <td className='text-danger'>
                      <i className='bi bi-x-circle-fill' onClick={() => removeFood(item.id)}></i>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListFood;