import "./styles.css";

const BtnDelete = ({ onClick }) => {
    return (
        <button className="btn btn-delete" onClick={onClick}>
            Delete
        </button>
    );
};

export default BtnDelete;
