import {FcOvertime } from 'react-icons/fc';
import {TiLocation } from 'react-icons/ti';

const EventDetailsCard = ({item}) => {
    const {image, payment, time, location, category, description} = item || {};

    return (
                <div className="card card-compact  bg-base-100 shadow-xl p-5">
  <figure><img className="h-80 w-96" src={image} alt="Shoes" /></figure>

  <div className="card-body">
    <h2 className="card-title text-red-600 font-bold">{category}</h2>
    <p className=" text-sm font-semibold">${payment}</p>
    <p className="flex gap-3 text-sm font-semibold"><FcOvertime></FcOvertime>{time}</p>
    <p  className="flex gap-3 text-sm font-semibold"><TiLocation></TiLocation>{location}</p>
    <p>{description}</p>
  </div>
</div>
    );
};

export default EventDetailsCard;