function HeaderButton({title, set, isActive}) {
    return (
        <button
            className={"headerButton" + " " + (isActive ? "headerButtonActive" : "")}
            onClick={set}
        >
            {title}    
        </button>
    )
}

export default HeaderButton;