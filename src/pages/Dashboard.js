import TicketCard from "../components/TicketCard.js";


const Dashboard = () => {

    const tickets = [
        {
            category: 'Q1 2022',
            color: 'red',
            title: 'NFT Safety 101 Video',
            owner: 'Kristian Cedillo',
            avatar: 'https://media.licdn.com/dms/image/D4E03AQGIPH4X2SsFZQ/profile-displayphoto-shrink_200_200/0/1695309724650?e=1727308800&v=beta&t=4Clgc_trXJTlUXObDqiIXdW5shrVxMr-IQ2H8yqT-4Y',
            status:'done',
            priority: 5,
            progress: 40,
            description: 'Make a video about the matter of using strict mode within a js project',
            timestamp: '2022-02-11T07:36:17+0000'
        },
        {
            category: 'Q2 2022',
            color: 'green',
            title: 'Get in touch with customer to get details about their app',
            owner: 'Fernanda Smith',
            avatar: 'https://media.licdn.com/dms/image/D4E03AQGIPH4X2SsFZQ/profile-displayphoto-shrink_200_200/0/1695309724650?e=1727308800&v=beta&t=4Clgc_trXJTlUXObDqiIXdW5shrVxMr-IQ2H8yqT-4Y',
            status:'done',
            priority: 2,
            progress: 95,
            description: 'Send invite and make sure to get all the meeting details and the subjects to be discussed',
            timestamp: '2022-06-11T07:36:17+0000'
        },
        {
            category: 'Q3 2022',
            color: 'blue',
            title: 'Complete dashboard styling',
            owner: 'Arinn Gunner',
            avatar: 'https://media.licdn.com/dms/image/D4E03AQGIPH4X2SsFZQ/profile-displayphoto-shrink_200_200/0/1695309724650?e=1727308800&v=beta&t=4Clgc_trXJTlUXObDqiIXdW5shrVxMr-IQ2H8yqT-4Y',
            status:'done',
            priority: 3,
            progress: 78,
            description: 'Finish details about gov dashboard',
            timestamp: '2022-10-11T07:36:17+0000'
        },
    ]
    const uniqueCategories = [
        ...new Set(tickets?.map(({category}) => category))
    ];    
    console.log('kc',uniqueCategories);
    

    return(
        <div className="dashboard"> 
            <h1>My projects</h1>
            <div className="ticket-container">
                {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
                    <div key={categoryIndex}>
                        <h3>{uniqueCategory}</h3>
                        {tickets.filter(ticket => ticket.category === uniqueCategory)
                            .map((filteredTicket, _index) => (
                                <TicketCard
                                    id={_index}
                                    color={filteredTicket.color}
                                    ticket={filteredTicket}
                                
                                />
                            ))
                        };
                    </div>
                ))};
                
            </div>
        </div>
    );

};

export default Dashboard;