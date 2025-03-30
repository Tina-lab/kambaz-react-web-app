import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ASSIGNS_API = `${REMOTE_SERVER}/api/assignments`;
export const deleteAssignment = async (aId: string) => {
  const response = await axios.delete(`${ASSIGNS_API}/${aId}`);
  return response.data;
};
export const updateAssignment = async (a: any) => {
  const { data } = await axios.put(`${ASSIGNS_API}/${a._id}`, a);
  return data;
};
