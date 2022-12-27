import { Grid } from '@mui/material';
import React,{useEffect,useState} from 'react';
import Header from '../components/Header';
import UserList from '../components/UserList';
import { IUser,PageEnum } from '../types';
import AddUser from './AddUser';
import EditUser from './EditUser';




const Home = () => {
  const [users, setUsers] = useState([] as IUser[]);
  const [shownPage, setShownPage] = useState(PageEnum.list);
  const [dataToEdit, setDataToEdit] = useState({} as IUser);
  useEffect(() => {
    const listInString = window.localStorage.getItem("studentinfo");
    if (listInString) {
      _setUsers(JSON.parse(listInString));
    }
  }, []);

  const _setUsers = (list: IUser[]) => {
    // setStudentList(list);
    setUsers(list);
    window.localStorage.setItem("users", JSON.stringify(list));
  };
  const addUser = (data: IUser) => {
    // _setStudentList([...studentList, data]);
     setUsers([...users,data]);
  };

  const updateData = (data: IUser) => {
    const filteredData = users.filter((x) => x.id === data.id)[0];
    const indexOfRecord = users.indexOf(filteredData);
    const tempData = [...users];
    tempData[indexOfRecord] = data;
    // _setStudentList(tempData);
    setUsers(tempData)
  };

  const showListPage = () => {
    setShownPage(PageEnum.list);
  };

  const editUserData = (data: IUser) => {
    setShownPage(PageEnum.edit);
    setDataToEdit(data);
  };

  const deleteUser = (data: IUser) => {
    const indexToDelete = users.indexOf(data);
    const tempList = [...users];
    tempList.splice(indexToDelete, 1);
    // _setStudentList(tempList);
     setUsers(tempList);
  };

  return (
    <>
      <Grid>
      
      <Header />
       <br/>
       {shownPage === PageEnum.list && (
        <>
      <UserList users={users} setUsers={setUsers } onDeleteClickHnd={deleteUser}
              onEdit={editUserData} />
       </>
         )}
          {shownPage === PageEnum.add && (
            <AddUser 
            onBackBtnClickHnd ={showListPage}
            users={users}
            setUsers={setUsers}
            handleSubmit={addUser}
            />
          )}
           {shownPage === PageEnum.edit && (
            <EditUser 
            data={dataToEdit}
            onBackBtnClickHnd={showListPage}
            onUpdateClickHnd={updateData}
            users={users}
            setUsers={setUsers} 
            />
           )}
      </Grid>
    
    </>
  );
};

export default Home;
