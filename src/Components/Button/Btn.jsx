function Btn({ name ,classname,type,handleClick}) {
    return (
        <button
            type={type}
            className={classname}
            onClick={handleClick}
        >
            {name}
        </button>
    );
}

export default Btn;