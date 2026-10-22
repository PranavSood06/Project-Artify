function Btn({ name, classname, type = "button", handleClick, disabled = false }) {
    return (
        <button
            type={type}
            className={classname}
            onClick={handleClick}
            disabled={disabled}
            aria-label={type === "submit" ? "Search photos" : undefined}
        >
            {name}
        </button>
    );
}

export default Btn;
