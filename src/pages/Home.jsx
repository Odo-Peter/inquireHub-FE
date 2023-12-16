import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { ArrowRight, Loader2 } from 'lucide-react';

// import { navigateBackToAuth } from '../utils/helperfuncs';
import Feed from '../components/Feed';

const Home = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const user = JSON.parse(window.localStorage.getItem('currentUser'));
      setUserInfo(user);
    }, 3000);
  }, []);

  // console.log('User: ', userInfo);
  // const elem = document.querySelector('.clicked');

  // const handleAutoNavigate = (e) => {
  //   e.preventDefault();
  //   if (e.type === 'click') ;
  //   console.log(e);
  // };

  return (
    <section className="relative flex h-screen w-full">
      {!userInfo ? (
        <div className="flex flex-col items-center justify-center h-full w-full gap-y-3 px-4">
          <Loader2 className="h-24 w-24 animate-spin text-yellow-600" />
          <h1 className="text-2xl text-center font-extrabold inline-block text-transparent bg-gradient-to-r from-pink-400 to-yellow-500 bg-clip-text">
            <span className="md:text-3xl">InquireHub</span> is preparing your
            feed page...
          </h1>
          <p className="text-gray-500 w-[90%] text-center md:w-full text-xs md:text-sm">
            If it's taking longer than expected.. try logging in again
          </p>
          <Link
            to={'/auth/sign_in'}
            className="clicked text-sm md:text-base bg-gradient-to-r flex items-center justify-center gap-x-2 from-pink-500 to-blue-500 text-white text-center w-[70%] md:w-[40%] py-[10px] rounded-full font-medium mt-6 transition-all hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500"
          >
            Back to Login Page <ArrowRight className="h-4 w-4 ml-2" />{' '}
          </Link>

          {/* {navigateBackToAuth(3, elem)} */}
        </div>
      ) : (
        <Feed fullname={userInfo ? userInfo?.fullname : 'Dear User'} />
      )}
    </section>
  );
};

export default Home;
