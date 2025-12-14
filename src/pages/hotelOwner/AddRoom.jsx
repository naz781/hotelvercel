import React from 'react'
import { useState } from 'react'
import Title from '../../component/Title'
import { assets } from '../../assets/assets'

const AddRoom = () => {
    const [images, setImages] = useState({
        1: null,
        2: null,
        3: null,
        4: null
    })
    const [inputs, setInputs] = useState({
        roomType: '',
        pricePernight: 0,
        amenities: {
            'Free Wifi': false,
            'Free Breakfast': false,
            'Room Service': false,
            'Mountain View': false,
            'Pool Access': false
        }
    })
    return (
        <form className=''>
            <Title title='AddRoom' subTitle='Fill in the Details carefully and accurate room details, pricing and amenities, to enhance the user booking experience.' align='left' font='outfit' />
            {/* upload images */}
            <p className='text-gray-800 mt-10'>Images</p>
            <div className='grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap'>
                {Object.keys(images).map((key) => (
                    <label htmlFor={`roomImage${key}`} key={key}>
                        <img className='max-h-13 cursor-pointer opacity-80'
                            src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea} alt='' />
                        <input type='file' accept='image/*' id={`roomImage${key}`} hidden
                            onChange={(e) => setImages({ ...images, [key]: e.target.files[0] })} />
                    </label>
                ))}
            </div>
        </form>
    )
}

export default AddRoom
