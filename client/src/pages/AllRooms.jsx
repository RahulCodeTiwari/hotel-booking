import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { assets, facilityIcons, roomsDummyData } from '../assets/assets'
import StarRating from '../components/StarRating'


const checkBox = ({label, selected = false, onChange = () => { }}) => {
    return (
        <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
            <input type="checkbox" checked={selected} onChange={(e.target.checked, label)} />
            <span className='font-light select-none'>{label}</span>
        </label>
    )

}

const RadioButton = ({label, selected = false, onChange = () => { }}) => {
    return (
        <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
            <input type="radio" checked={selected} onChange={(label)} />
            <span className='font-light select-none'>{label}</span>
        </label>
    )

}

const AllRooms = () => {
    const navigate = useNavigate()
    const [openFilters, setOpenFilters] = useState(false)

    const roomTypes = [
        "Single Room",
        "Double Room",
        "Luxury Room",
        "Family Suite",      
    ];

    const priceRanges = [
        "Under $100",
        "$100 - $200",
        "$200 - $300",
        "Above $400",
    ];

    const sortOptions = [
        "Price: Low to High",
        "Price: High to Low",
        "Newest First",   
    ];


  return (
    <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 md:px-16 lg:px-24 xl:px-32'>
        <div>
            <div className='flex flex-col items-start text-left'>
                <h1 className='font-playfair text-4xl md:text-[40px]'>
                    Hotel Rooms
                </h1>
                <p className='text-sm md:text-base text-gray-500/90 mt-2'>
                    Take advantage of our limited-time offers and special packages to enhance your stay and create unforgottetable memories.
                </p>
            </div>
            {roomsDummyData.map((room)=>(
                <div key={room._id} className='flex flex-col md:flex-row items-start py-10 gap-6
                border-b border-gray-300 last:pb-30 last:border-0'>
                    <img onClick={()=> navigate(`/rooms/${room._id}`) }
                     src={room.images[0]} alt="hotel-img" title='View Room Details'
                    className='max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer' />
                    <div>
                        <p>{room.hotel.city}</p>
                        <p>{room.hotel.name}</p>
                        <div className='flex items-center'>
                            <StarRating />
                            <p className='ml-2'>200+ reviews</p>
                        </div>
                        <div>
                            <img src={assets.locationIcon} alt="location-icon" />
                            <span>{room.hotel.address}</span>
                        </div>
                        {/* room amenities */}
                        <div className='flex flex-wrap items-cneter mt-3 mb-6 gap-4'>
                            {room.amenities.map((item, index)=> (
                                <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70'>
                                    <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                                    <p className='text-xs'>{item}</p>
                                </div>
                            ))}
                        </div>
                        {/* room price per night */}
                        <p className='text-xl font-medium text-gray-700'>${room.pricePerNight} /night</p>
                    </div>
                </div>
            ))}
        </div>
        {/* Filters */}
        <div className='bg-white w-80 border border-gray-300 text-gray-600
        max-lg:mb-8 min-lg:mt-16'>

            <div className={`flex items-cneter justify-between px-5 py-2.5min-lg:border-b border-gray-300
              ${openFilters && "border-b"}`}>
                <p className='text-base font-medium text-gray-800'>FILTERS</p>
                <div className='text-xs cursor-pointer'>
                    <span onClick={() => setOpenFilters(!openFilters)}
                    className='lg:hidden'>
                        {openFilters ? 'HIDE' : 'SHOW'}</span>

                    <span className='hidden lg:block'>CLEAR</span>
                </div>
            </div>

            <div className={`${openFilters ? 'h-auto' : "h-0 lg:h-auto"}
            overFlow-hidden transition-all duration-700`}>
                <div className='px-5 pt-5'>
                    <p className='font-medium text-gray-800 pb-2'>Popular Filters</p>
                    {roomTypes.map((room, index)=> (
                        <checkBox key={index} label={room} />
                    ))}

                </div>
                 <div className='px-5 pt-5'>
                    <p className='font-medium text-gray-800 pb-2'>Price Range</p>
                    {priceRanges.map((range, index)=> (
                        <checkBox key={index} label={`$ ${range}`} />
                    ))}

                </div>

                 <div className='px-5 pt-5 pb-7'>
                    <p className='font-medium text-gray-800 pb-2'>Sort By</p>
                    {sortOptions.map((option, index)=> (
                        <RadioButton key={index} label={option} />
                    ))}

                </div>
            </div>
        </div>
    </div>
  )
}

export default AllRooms