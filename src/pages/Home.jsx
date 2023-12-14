import { useState, useEffect } from 'react';
// import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';

const Home = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem('currentUser'));
    setUserInfo(user);
  }, []);

  // console.log(userInfo);

  return (
    <section className="relative flex h-screen w-full">
      {/* <Sidebar /> */}
      <Feed fullname={userInfo ? userInfo?.fullname : 'Dear User'} />
    </section>
  );
};

export default Home;
