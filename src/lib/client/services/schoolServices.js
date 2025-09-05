import axios from "axios";
// const NEXT_DEPLOYED_URL = process.env.NEXT_PUBLIC_API_URL
const NEXT_DEPLOYED_URL = "http://localhost:3000/";

export const addSchool = async (schoolData) => {
  try {
    const response = await axios.post(
      `${NEXT_DEPLOYED_URL}/api/add`,
      schoolData
    );
    return response.data;
  } catch (error) {
    console.error("Error adding school:", error);
    throw error;
  }
};

export const getAllSchools = async () => {
  try {
    const response = await axios.get(`${NEXT_DEPLOYED_URL}/api/get`);
    return response.data;
  } catch (error) {
    console.error("Error fetching schools:", error);
    throw error;
  }
};

export const getSchoolById = async (id) => {
  try {
    const response = await axios.get(`${NEXT_DEPLOYED_URL}/api/get/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching school:", error);
    throw error;
  }
};
