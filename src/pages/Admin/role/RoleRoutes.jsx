import { Route, Routes } from "react-router-dom";
import EditRole from "./edit/EditRole";
import AddRole from "./add/AddRole";
import ViewRoles from "./view/ViewRoles";

const RoleRoutes = () => {
    return (
        <Routes>
            <Route path="curd/role" element={<ViewRoles />} />
            <Route path="curd/role/add" element={<AddRole />} />
            <Route path="curd/role/edit/:roleId" element={<EditRole />} />
        </Routes>
    );
};

export default RoleRoutes;
