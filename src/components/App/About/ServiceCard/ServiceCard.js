import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ServiceCard = (props) =>{
    return (
        <div className="fast-delivery">
            <FontAwesomeIcon icon={props.icon} className="font-awesome" />
            <p>Fast delivery</p>
        </div>
    );
}