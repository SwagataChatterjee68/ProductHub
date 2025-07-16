
import axios from '../../api/AxiosConfig'
import { toast } from 'react-toastify'
import { loaduser, removeuser } from '../reducers/UserSlice'

export const asyncLoggedInUser = () => async (dispatch, getState) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user) {
            dispatch(loaduser(user))
        }
        else {
            console.log("User Not Logged In")
        }
    } catch (error) {
        toast.error("Something Went Wrong")

    }
}

export const asyncLogoutUser = () => async (dispatch, getState) => {
    try {
        localStorage.removeItem("user")
        dispatch(removeuser())

    } catch (error) {
        console.log(error)

    }
}

export const asyncLoginUser = (user) => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(`/users?email=${user.email}`);
        if (data.length === 0) {
            toast.error("Invalid email or password");
            return;
        }
        toast.success("Login Successful");

        // ✅ store the single user object, not array
        dispatch(loaduser(user))
        localStorage.setItem("user", JSON.stringify(data[0]));

    } catch (error) {
        toast.error("Something Went Wrong");
    }
};

export const asyncUpdateUser = (id, user) => async (dispatch, getState) => {
    try {
        const { data } = await axios.patch("/users/" + id, user);
        localStorage.setItem("user", JSON.stringify(data)); // remove [0] unless necessary
        dispatch(asyncLoggedInUser())
        
    } catch (error) {
        console.error("Update error:", error);
        
    }
};

export const asyncDeleteUser = (id) => async (dispatch, getState) => {
    try {
        await axios.delete("/users/" + id)
       dispatch(asyncLogoutUser())
    
    } catch (error) {
        console.log(error)

    }
}

export const asyncRegisterUser = (user) => async (dispatch, getState) => {
    try {
        const res = await axios.post("/users", user)
        dispatch(loaduser(user))
        toast.success("Register Successfull")
    } catch (error) {
        toast.error("Something Went Wrong")

    }
}
