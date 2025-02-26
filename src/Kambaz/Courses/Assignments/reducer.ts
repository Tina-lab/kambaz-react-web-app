import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { assignments } from '../../Database'; // Adjust the path as necessary
import { v4 as uuidv4 } from "uuid";

const initialState = {
    assignments,
};

const assignmentsSlice = createSlice({
    name: 'assignments',
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment: any = {
              _id: uuidv4(),
              title: assignment.name,
              course: assignment.course,
              available: assignment.available,
              due: assignment.due,
              description: assignment.description,
            };
            state.assignments = [...state.assignments, newAssignment] as any;
          },
          deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter((m: any) => m._id !== assignmentId);
          },
          updateAssignment: (state, { payload: module }) => {
            state.assignments = state.assignments.map((m: any) =>
              m._id === module._id ? module : m
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