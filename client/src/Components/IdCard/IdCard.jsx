import React from 'react';
import '../IdCard/IdCard.css';
import IDCardImage from '../../images/idcard.png';
import ProfilePicture from '../../images/profilepic.png';


const IdCard = () => {
  return (
    <div className='_id_card_main'>
        <div className='idCardImage_main_div'>
            <img src={IDCardImage} alt='image' className='IDCard_image_css' />
        </div>
        <div className='profile_picture_main_div'>
            <img src={ProfilePicture} alt='image' className='Profile_picture_image_css' />
        </div>
    </div>
  )
}

export default IdCard