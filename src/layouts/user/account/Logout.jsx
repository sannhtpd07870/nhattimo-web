import { logout } from "../../api/auth";

const Logout = () => {
    const handleLogout = async () => {
        try {
            await logout();
            alert("Logout successful.");
        } catch (error) {
            alert(error);
        }
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
