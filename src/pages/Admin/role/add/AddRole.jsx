import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";
import "./styles.css"; // Import CSS file

const AddRole = () => {
    const [roleName, setRoleName] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRole = { RoleName: roleName, Description: description };
        const token = localStorage.getItem("token"); // Lấy token từ localStorage hoặc sessionStorage
        console.log(newRole);
        fetch("http://localhost:12345/api/Roles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // Thêm token vào header Authorization
            },
            body: JSON.stringify(newRole),
        })
            .then((response) => response.json())
            .then(() => {
                console.log("Add thành công");
                navigate(ROUTES.ADMIN.ROLE.VIEW); // Chuyển về trang ViewRoles sau khi thêm thành công
            })
            .catch((error) => {
                console.log("Add thất bại");

                console.error("Error adding role:", error);
            });
    };

    return (
        <div className="add-role-container">
            <h1>Add Role</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={roleName}
                    onChange={(e) => setRoleName(e.target.value)}
                    placeholder="Role Name"
                    required
                />
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    required
                />
                <button type="submit">Add Role</button>
                <Link to={ROUTES.ADMIN.ROLE.VIEW} className="back-link">
                    Back
                </Link>
            </form>
        </div>
    );
};

export default AddRole;
