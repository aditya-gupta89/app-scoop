import React from "react";
import ListItem from "../components/list/ListItem";
import { useState, useCallback, useEffect } from "react";
import "./Dashboard.css";
import DetailForm from "../components/detailsForm/DetailForm";
import { addAsyncDetail } from "../redux/DetailSlice";
import { fetchAsyncDetail } from "../redux/DetailSlice";
import { useDispatch } from "react-redux";
import { deleteAsyncDetail } from "../redux/DetailSlice";
import { detailAction } from "../redux/DetailSlice";
import Header from "../components/header/Header";
const Dashboard = () => {
  const [isEditing, setIsEditing] = useState(false);
  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncDetail());
  }, [dispatch]);

  function startEditingHandler() {
    setIsEditing(true);
  }
  function stopEditingHandler() {
    setIsEditing(false);
  }
  const saveDetailDataHandler = async (enteredData) => {
    const Data = {
      ...enteredData,
      id: Math.random().toString(),
    };
    
    dispatch(addAsyncDetail(Data));
    dispatch(fetchAsyncDetail());

    setIsEditing(false);
  };
  const deleteItemHandler = (Id) => {

    dispatch(deleteAsyncDetail(Id));
    dispatch(detailAction.removeSelectedDetail(Id));
  };
  return (
    <>
    <Header dashboard='true'/>
    {/* <h1>Dashboard</h1> */}
      <div className="new-form">
        {isEditing && (
          <DetailForm
            onSaveDetailData={saveDetailDataHandler}
            onCancle={stopEditingHandler}
          />
        )}
        {!isEditing && (
          <button onClick={startEditingHandler}>Add New Details</button>
        )}
      </div>
      <h1>List of friends with details....</h1>
      <ListItem onDelete={deleteItemHandler}  />
    </>
  );
};

export default Dashboard;
