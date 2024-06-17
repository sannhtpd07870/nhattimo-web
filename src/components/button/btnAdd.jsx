import "./styles.css";

const BtnAdd = ({ onClick }) => {
    return (
        <button className="btn btn-add" onClick={onClick}>
            Add
        </button>
    );
};

export default BtnAdd;
