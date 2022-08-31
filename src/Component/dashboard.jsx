import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import{ getUserList } from '../Redux/dashboard/action';

const Dashboard = () => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userList); //fetch data from reducers

    useEffect(() => {
        dispatch(getUserList()); //dispatch userList action
    }, []);

    return (
        <>Dashboard
            {/* {console.log('userData', userData.data)} */}
        </>
    )
};

export default Dashboard;