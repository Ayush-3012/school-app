import axios from "axios";
const BASE_URL = 'https://school-app-ivory-seven.vercel.app/'

export const addSchool = async (schoolData) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/add`, schoolData);
    return response.data;
  } catch (error) {
    console.error("Error adding school:", error);
    throw error;
  }
};

export const getAllSchools = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/get`);
    return response.data;
  } catch (error) {
    console.error("Error fetching schools:", error);
    throw error;
  }
};

export const getSchoolById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/get/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching school:", error);
    throw error;
  }
};
