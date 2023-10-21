import  { useEffect, useState } from 'react';
import EventsCard from './EventsCard';

const Event = () => {
    const [events, setEvents] = useState([])

    useEffect(()=>{
        fetch("/fake.json")
        .then((res)=>res.json())
        .then((data)=>setEvents(data))
    },[])
    console.log(events);
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    events.map(card=><EventsCard key={card.id} card={card}></EventsCard>)
                }
            </div>
        </div>
    );
};

export default Event;