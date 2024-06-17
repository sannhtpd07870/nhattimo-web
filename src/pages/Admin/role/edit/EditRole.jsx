import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";
import "./styles.css"; // Import CSS file

const EditRole = () => {
    const { id } = useParams();
    const [roleName, setRoleName] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:12345/api/Roles/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setRoleName(data.RoleName);
                setDescription(data.Description);
            })
            .catch((error) => {
                console.error("Error fetching role:", error);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedRole = { RoleName: roleName, Description: description };

        fetch(`http://localhost:12345/api/Roles/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedRole),
        })
            .then(() => {
                navigate(ROUTES.ADMIN.ROLE.VIEW); // Chuyển về trang ViewRoles sau khi cập nhật thành công
            })
            .catch((error) => {
                console.error("Error updating role:", error);
            });
    };

    return (
        <div className="edit-role-container">
            <h1>Edit Role</h1>
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
                <button type="submit">Update Role</button>
                <Link to={ROUTES.ADMIN.ROLE.VIEW} className="back-link">
                    Back
                </Link>
            </form>
        </div>
    );
};

export default EditRole;
