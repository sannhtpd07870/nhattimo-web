import { Outlet, useLocation } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

const UserLayout = () => {
    const location = useLocation();
    console.log("path ", location.pathname);

    return (
        <div>
            <Header />
            <Outlet />
            {/* Nếu location.pathname là "/edit-role", thì component <Footer /> sẽ không được render và không hiển thị.me */}
            {location.pathname != "/edit-role" && <Footer />}
        </div>
    );
};

export default UserLayout;
