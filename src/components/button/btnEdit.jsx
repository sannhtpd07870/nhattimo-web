import "./styles.css";

const BtnEdit = ({ onClick }) => {
    return (
        <button className="btn-edit" onClick={onClick}>
            Edit
        </button>
    );
};

export default BtnEdit;
