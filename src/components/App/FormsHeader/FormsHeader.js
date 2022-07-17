/* eslint-disable react/prop-types */
export const FormsHeader = (props) => {
    return (
        <div className={props.headerClassName}>
            <div className="form-header">
                <img className="create-icon" src={props.imgLeft} alt="Create icon" />
                <h1>{props.headerTitle}</h1>
                <img className={props.imageRight === './assets/book-icon.png' ? 'book-icon' : 'right-icon'} src={props.imgRight} alt="Header icons"/>
            </div>
        </div>
    );
}