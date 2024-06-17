import "../../../../assets/css/main.css";

import { Link } from "react-router-dom";

function AuthenticatedActions() {
    return (
        <div className="top-act">
            <Link to="/login" className="btn btn--text d-md-none">
                Sign In
            </Link>
            <Link to="/register" className="top-act__sign-up btn btn--primary">
                Sign Up
            </Link>
            {/* Other actions */}
        </div>
    );
}

export default AuthenticatedActions;
