function HeaderButton({title, set, isActive}) {
    return (
        <button
            className={"headerButton" + " " + (isActive ? "headerButtonActive" : "") + " " +`button${title}`}
            onClick={set}
        >
            {title}    
        </button>
    )
}

export default HeaderButton;