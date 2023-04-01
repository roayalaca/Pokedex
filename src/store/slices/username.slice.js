import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const usernameSlice = createSlice({
	name: 'username',
    initialState: null,
    reducers: {
        setNewName: ( state, action ) => {
            return action.payload
        } 
    }
})

export const { setNewName } = usernameSlice.actions;

export default usernameSlice.reducer;