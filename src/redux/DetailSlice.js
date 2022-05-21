import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {app,db} from '../services/firebase-config';
import { async } from '@firebase/util'
import { addDoc, collection,deleteDoc,getDocs,doc } from 'firebase/firestore'

const usersCollectionRef=collection(db,"users")
 

export const fetchAsyncDetail=createAsyncThunk("detail/fetchAsyncDetail",
async ()=>{
        const data=await getDocs(usersCollectionRef);
       const detail= (data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    return detail;
}
);

export const addAsyncDetail=createAsyncThunk("detail/addAsyncDetail",
async (Data)=>{
    await addDoc(usersCollectionRef,Data);
}
);

export const deleteAsyncDetail=createAsyncThunk("detail/deleteAsyncDetail",
async (Id)=>{
    const userDoc=doc(db,"users",Id);
    await deleteDoc(userDoc);
}
);



const initialState={
    details:[]
}
const detailSlice=createSlice({
    name:"Detail",
    initialState,
    reducers:{
        removeSelectedDetail(state,action){
            
            const updatedDetail = state.details.filter(detail => detail.id !== action.payload);
            console.log(updatedDetail);
            state.details=updatedDetail;
          },
    },
    extraReducers:{
        [fetchAsyncDetail.pending]:()=>{
            console.log("Pending");
        },
        [fetchAsyncDetail.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, details: payload };
        },
        [fetchAsyncDetail.rejected]: () => {
            console.log("Rejected!");
        },
        [addAsyncDetail.pending]:()=>{
            console.log("Pending");
        },
        [addAsyncDetail.fulfilled]: (state) => {
            console.log("Fetched Successfully!");
            return { ...state};
        },
        [addAsyncDetail.rejected]: () => {
            console.log("Rejected!");
        },
        [deleteAsyncDetail.pending]:()=>{
            console.log("Pending");
        },
        [deleteAsyncDetail.fulfilled]: (state) => {
            console.log("Fetched Successfully!");
            return { ...state};
        },
        [deleteAsyncDetail.rejected]: () => {
            console.log("Rejected!");
        },
        
    }
});
export default detailSlice;
export const detailAction=detailSlice.actions;