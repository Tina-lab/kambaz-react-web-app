import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  courses: [],
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, { payload: course }) => {
      state.courses = [...state.courses, { ...course, _id: uuidv4() }] as any;
    },
    deleteCourse: (state, { payload: courseId }) => {
      state.courses = state.courses.filter(
        (course: any) => course._id !== courseId
      );
    },
    updateCourse: (state, { payload: course }) => {
      state.courses = state.courses.map((c: any) =>
        c._id === course._id ? course : c
      ) as any;
    },
  },
});

export const { addCourse, deleteCourse, updateCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
