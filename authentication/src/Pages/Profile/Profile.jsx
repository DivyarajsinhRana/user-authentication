import { useAuthState } from "../../Context";
import Form from "./Form";



const Profile = () => {
    
    // const data = localStorage.getItem("currentUser");
    const user = useAuthState();
    // console.log(user.userDetails.email);
    return (
        <>
            <div>
            <p>Welcome {user.userDetails.email}</p>
            <Form/>
            </div>
        </>
            
           
    )
}

export default Profile
