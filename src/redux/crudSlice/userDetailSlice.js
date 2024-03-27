import { createSlice, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
// create action //post
export const createUser = createAsyncThunk(
  "createuser",
  async (data, { rejectWithValue }) => {
    console.log("data", data);
    try {
      const reponse = await fetch(
        "https://65f29add034bdbecc7654a0f.mockapi.io/crud",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      // console.log("hi all", reponse);

      const result = await reponse.json();
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// 5// read action //fetch or get
export const showUser = createAsyncThunk(
  "showUser",
  async (ert, { rejectWithValue }) => {
    try {
      const response = await fetch(
        //here we have use destrasute to get a data from api
        "https://65f29add034bdbecc7654a0f.mockapi.io/crud" // here we didnot require json becase we have used axios metehod
      );
      // console.log(response);
      const result = await response.json();
      // console.log(result);
      return result;
      // console.log(result);
      // return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// 5// delete action
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    console.log(id);
    try {
      const response = await fetch(
        `https://65f29add034bdbecc7654a0f.mockapi.io/crud/${id}`,
        { method: "DELETE" }
      );
      // console.log(data);
      const result = await response.json();

      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// update user

export const updateUser = createAsyncThunk(
  "updateuser",
  async (data, { rejectWithValue }) => {
    console.log("data", data);
    try {
      const reponse = await fetch(
        `https://65f29add034bdbecc7654a0f.mockapi.io/crud/${data.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      console.log("hi all", reponse);

      const result = await reponse.json();
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
    serchData:[]
  },
  reducers: {
    searchUser:(state,action)=>{
      state.serchData=action.payload
    }
  },
  extraReducers: (builder) => {
    // if (createUser.state && showUser.state !== "") {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      });
    // }
    //
    // if (createUser.state && showUser.state !== "") {
    builder
      .addCase(showUser.pending, (state) => {
        // console.log("afgg", state);
        state.loading = true;
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload; //
        // console.log("afgg", action.payload);
        // console.log(state.users);
      })
      .addCase(showUser.rejected, (state, action) => {
        state.loading = false;
        // state.users = action.payload;
        state.error = action.payload;
      });
    // }
    // if (createUser.state && deleteUser.state !== "") {
    builder
      .addCase(deleteUser.pending, (state) => {
        // console.log("afgg", state);
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        // state.users = action.payload;
        // console.log("afgg", action.payload);
        // console.log( .users);
        // console.log("fghj",action.payload);
        // console.log(state.users);
        const { id } = action.payload;
        if (id) {
          state.users = state.users.filter((ele) => ele.id !== id);
        }
        console.log(state.users);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        // state.users = action.payload;
        state.error = action.payload;
      });
    // }
    ///
builder
  .addCase(updateUser.pending, (state) => {
    state.loading = true;
  })
  .addCase(updateUser.fulfilled, (state, action) => {
    state.loading = false;
    state.users = state.users.map((ele) =>
      ele.id === action.payload.id ? action.payload : ele
    );
  })
  .addCase(updateUser.rejected, (state, action) => {
    state.loading = false;
    state.users = action.payload;
  });
    
  },
});
export default userDetail.reducer;
export const {searchUser}=userDetail.actions


