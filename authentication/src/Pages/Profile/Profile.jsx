import { useAuthState } from "../../Context";
import Form from "./Form";
import "./profile.css"

const Profile = () => {

    // const data = localStorage.getItem("currentUser");
    const user = useAuthState();
    // console.log(user.userDetails.email);
    return (
        <>
        <div className="profile">           
         <div className="user">
                <p>Welcome {user.userDetails.email}</p>
            </div>
            <div className="form mx-5">
                <Form />
            </div>
        </div>
        </>


    )
}

export default Profile
