import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Create  a new user
export const createUser = createAsyncThunk("createUser",
    async (data, { rejectWithValue }) => {
        const response = await fetch("https://647cc32cc0bae2880ad125d3.mockapi.io/crud",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
        try {
            const result = await response.json();
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    })
//Update User
export const updateUser = createAsyncThunk("updateUser",
    async (data, { rejectWithValue }) => {
        const response = await fetch(`https://647cc32cc0bae2880ad125d3.mockapi.io/crud/${data.id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
        try {
            const result = await response.json();
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    })
// Read The Data
export const showUser = createAsyncThunk(
    "showUser",
    async (rejectWithValue) => {
        const response = await fetch("https://647cc32cc0bae2880ad125d3.mockapi.io/crud")
        try {
            const result = await response.json();
            return result;
        } catch (error) {
            return rejectWithValue(error)
        }
    })
// Delete the User
export const deleteUser = createAsyncThunk(
    "deleteUser",
    async ( id, rejectWithValue) => {
        const response = await fetch(`https://647cc32cc0bae2880ad125d3.mockapi.io/crud/${id}`
        ,{method: "DELETE"})
        try {
            const result = await response.json();
            return result;
        } catch (error) {
            return rejectWithValue(error)
        }
    })

export const userDetail = createSlice({
    name: 'userDetail',
    initialState: {
        user: [],
        loading: false,
        error: null,
    },
    extraReducers: {
        [createUser.pending]: (state) => {
            state.loading = true;
        },
        [createUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.user.push(action.payload);
        },
        [createUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [showUser.pending]: (state) => {
            state.loading = true;
        },
        [showUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = action.payload;
        },
        [showUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [deleteUser.pending]: (state) => {
            state.loading = true;
        },
        [deleteUser.fulfilled]: (state, action) => {
            state.loading = false;
            const {id} = action.payload;
            if(id){
                state.user = state.user.filter(ele => ele.id !== id)
            }
        },
        [deleteUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [updateUser.pending]: (state) => {
            state.loading = true;
        },
        [updateUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = state.user.map((ele) =>
        ele.id === action.payload.id ? action.payload : ele
      );
        },
        [updateUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    }
}
)

export default userDetail.reducer;