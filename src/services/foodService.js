import axios from "axios"
const API_URl = 'http://localhost:8080/api/foods';

export const addFood = async (foodData, image) => {

  const formData = new FormData();
  formData.append('food', JSON.stringify(foodData));
  formData.append('file', image);


  try {
    await axios.post(API_URl, formData, { headers: { "Content-Type": "multipart/form-data" } });

  } catch (error) {
    console.log("Erorr", error);
    throw error;
  }

}


export const getFoodList = async () => {

  try {

    const response = await axios.get(API_URl);

    return response.data
  } catch (error) {

    console.log(error, "error occurs when fetching the list of food");
    throw error;

  }
}


export const deleteFood = async (foodId) => {
  try {
    const response = await axios.delete(API_URl + "/" + foodId);
    return response.status == 200;
  } catch (error) {
    console.log(error, "error while feching the data");
    throw error;
  }

}
