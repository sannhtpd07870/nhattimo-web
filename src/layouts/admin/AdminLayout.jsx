import "./styles.css";
import AdminFooter from "../admin/footer/adminFooter";
import AdminHeader from "../admin/header/adminHeader";
import AdminNav from "../admin/navbar/adminNav";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    return (
        <div className="admin-layout">
            <AdminHeader />
            <div className="admin-content">
                {/* <AdminNav /> */}
                <div className="admin-main">
                    <Outlet />
                </div>
            </div>
            <AdminFooter />
        </div>
    );
};

export default AdminLayout;
