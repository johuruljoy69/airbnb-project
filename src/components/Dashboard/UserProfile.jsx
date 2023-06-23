import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="card card-side bg-base-100 mt-12 ml-12 shadow-xl">
            <div className="avatar">
                <div className="w-52 rounded-xl">
                    <img src={user?.photoURL} />
                </div>
            </div>
            <div className="card-body">
                <h2 className="text-3xl font-semibold">Name: <span className="text-purple-600">{user?.displayName}</span> </h2>
                <p className="text-xl font-semibold">Email: <span className="text-green-700">{user?.email}</span> </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Show Details</button>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;