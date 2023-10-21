import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import EventDetailsCard from "./EventDetailsCard";


const EventDetails = () => {

    const [item, setItem] = useState([])

    const {id} = useParams()

    const items =useLoaderData()

    useEffect(() =>{
        const findItem = items?.find(item=> item.id == id)
        setItem (findItem);
    },[id, items])

    return (
        <div>
            <EventDetailsCard item={item}></EventDetailsCard>
        </div>
    );
};

export default EventDetails;