import AdminLayout from "../../layouts/admin/AdminLayout";
import BtnEdit from "../../components/button/btnEdit";
import BtnDelete from "../../components/button/btnDelete";
import BtnAdd from "../../components/button/btnAdd";
import BtnBack from "../../components/button/btnBack";
const AdminDashboard = () => {
    return (
        <AdminLayout>
            <h2>Welcome to the Admin Dashboard</h2>
            <BtnEdit onClick={() => console.log("Edit button clicked")} />
            <BtnDelete onClick={() => console.log("Delete button clicked")} />
            <BtnAdd onClick={() => console.log("Add button clicked")} />
            <BtnBack onClick={() => console.log("Back button clicked")} />
        </AdminLayout>
    );
};

export default AdminDashboard;
