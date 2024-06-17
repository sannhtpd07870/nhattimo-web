import "./styles.css";

const BtnBack = ({ onClick }) => {
    return (
        <button className="btn btn-back" onClick={onClick}>
            Back
        </button>
    );
};

export default BtnBack;
