import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";
import "./styles.css";

const ViewRoles = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "http://localhost:12345/api/Roles",
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            // Add any other headers as needed
                        },
                        // Remove mode: "no-cors"
                    }
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setData(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(
                `http://localhost:12345/api/Roles/${id}`,
                {
                    method: "DELETE",
                }
            );
            if (!response.ok) {
                throw new Error("Failed to delete role");
            }
            setData(data.filter((item) => item.id !== id));
        } catch (error) {
            console.error("Error deleting role:", error);
        }
    };

    return (
        <div>
            <h1>View Roles</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="roles-container">
                    {data.map((item) => (
                        <div key={item.id} className="role-item">
                            <h2>{item.roleName}</h2>
                            <p>ID: {item.id}</p>
                            <p>Description: {item.description}</p>
                            <div className="role-actions">
                                <Link
                                    to={`/role/edit/${item.id}`}
                                    className="edit-button"
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="delete-button"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="role-item">
                        <Link to={ROUTES.ADMIN.ROLE.ADD} className="add-button">
                            Add Role
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ViewRoles;
