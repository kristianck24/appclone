import {Link} from 'react-router-dom';
import AvatarDisplay from "./AvatarDisplay";
import StatusDisplay from "./StatusDisplay";
import PriorityDisplay from "./StatusDisplay";
import Progressdisplay from "./Progressdisplay";
import DeleteBlock from "./DeleteBlock";

const TicketCard = ({color, ticket}) => {

    return(
        <div className="ticket-card"> 
            <Link>
                <div className="ticket-color"></div>
                <h3>{ticket.title}</h3>
                <AvatarDisplay/>
                <StatusDisplay/>
                <PriorityDisplay/>
                <Progressdisplay/>                
            </Link>
            <DeleteBlock/>
        </div>
    );

};

export default TicketCard;