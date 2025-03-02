import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { enrollments } from '../Database'; // Adjust the path as necessary

const initialState = {
    enrollments,
    enrollmentCount: enrollments.length,
};

const enrollmentsSlice = createSlice({
    name: 'enrollments',
    initialState,
    reducers: {
        addEnrollment: (state, { payload: enrollment }) => {
            state.enrollmentCount = state.enrollmentCount + 1;
            const newEnrollment: any = {
              _id: state.enrollmentCount,
              user: enrollment.user,
              course: enrollment.course
            };
            state.enrollments = [...state.enrollments, newEnrollment] as any;
            console.log("addEnrollment reducer triggered with enrollment:", newEnrollment);
          },
          deleteEnrollment: (state, { payload: enrollmentId }) => {
            state.enrollments = state.enrollments.filter((e: any) => e._id !== enrollmentId);
            console.log("deleteEnrollment reducer triggered with enrollmentId:", enrollmentId);
          },
    },
});

export const { addEnrollment, deleteEnrollment} = enrollmentsSlice.actions;

export default enrollmentsSlice.reducer;