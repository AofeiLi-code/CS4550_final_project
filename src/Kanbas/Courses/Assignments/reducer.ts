import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
    assignments: assignments,
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment: any = {
                _id: new Date().getTime().toString(),
                title: assignment.title,
                course: assignment.course,
                description: assignment.description,
                point: assignment.point,
                dueDate: assignment.dueDate,
                availableFromDate: assignment.availableFromDate,
                availableUntilDate: assignment.availableUntilDate
            };
            state.assignments = [...state.assignments, newAssignment] as any;
        },


        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (a: any) => a._id !== assignmentId
            );
        },

        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignment._id ? assignment : a
            );
        },

        editAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignmentId ? { ...a, editing: true } : a
            );
        },
    },
});

export const {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    editAssignment,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
