import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex  max-w-7xl mx-auto justify-between items-center p-4 border-b-2 '>
              <h1 className='text-2xl font-bold'>knowledge Cafe</h1>
              <img src={profile} alt="" />
        </header>
    );
};

export default Header;