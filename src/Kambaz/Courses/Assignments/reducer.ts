import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { assignments } from '../../Database'; // Adjust the path as necessary

const initialState = {
    assignments,
};

const assignmentsSlice = createSlice({
    name: 'assignments',
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment: any = {
              _id: assignment._id,
              title: assignment.title,
              course: assignment.course,
              availableFrom: assignment.availableFrom,
              availableUntil: assignment.availableUntil,
              points: assignment.points,
              due: assignment.due,
              description: assignment.description,
            };
            state.assignments = [...state.assignments, newAssignment] as any;
            console.log("addAssignment reducer triggered with assignment:", newAssignment);
          },
          deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter((m: any) => m._id !== assignmentId);
            console.log("deleteAssignment reducer triggered with assignmentId:", assignmentId);
          },
          updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((a: any) =>
              a._id === assignment._id ? assignment : a
            ) as any;
          },
          editAssignment: (state, { payload: moduleId }) => {
            state.assignments = state.assignments.map((m: any) =>
              m._id === moduleId ? { ...m, editing: true } : m
            ) as any;
        // Add any other reducer functions as needed
    },
    },
});

export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } = assignmentsSlice.actions;

export default assignmentsSlice.reducer;