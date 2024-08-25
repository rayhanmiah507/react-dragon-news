import titleImg from '../../../assets/images/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center my-12 space-y-5'>
            <img className='mx-auto' src={titleImg} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;