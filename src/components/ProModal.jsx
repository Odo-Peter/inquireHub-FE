import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import { CheckCircle2, Loader2, X } from 'lucide-react';

import { setToken, subscribeToPro } from '../services/paystack';
import { subscriptionsPlans } from '../utils/pricing';

const ProModal = ({ closeModal }) => {
  const [, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const currUser = window.localStorage.getItem('currentUser');

    if (currUser) {
      const user = JSON.parse(currUser);
      setUser(user);
      setToken(user?.token);
    }
  }, []);

  const handlePayStackPayment = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const paystackResponse = await subscribeToPro({ plan: 2000 });

      const parsedResponse = paystackResponse
        ? JSON.parse(paystackResponse)
        : null;

      const authUrl = parsedResponse
        ? parsedResponse?.data.authorization_url
        : null;
      console.log(authUrl);
      window.location.href = authUrl;
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="absolute flex flex-col justify-center items-center w-full h-full py-8 px-10 md:px-20 lg:px-32 top-0 left-0 bg-[#0a0a0a] bg-opacity-90 z-50 overflow-auto md:overflow-hidden transition-all">
      <div className="relative flex flex-col w-full h-full md:flex-row items-center justify-center gap-8">
        {subscriptionsPlans.map((sub) => (
          <div
            key={sub.title}
            className="flex flex-col gap-y-2 max-w-[24rem] bg-slate-900 rounded-lg w-full py-5 px-6 opacity-100"
          >
            <h3 className="text-lg inline-block text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text font-bold">
              {sub.title}
            </h3>
            <p className="font-semibold text-base text-gray-300 mb-2 pb-2 border-b border-fuchsia-400">
              <span className="text-lg inline-block text-transparent text-center bg-gradient-to-r from-fuchsia-500 to-blue-500 bg-clip-text">
                {sub.price}$ /
              </span>{' '}
              month
            </p>
            <p className="text-sm text-gray-30 mb-4">{sub.description}</p>
            {sub.features.map((feature, idx) => (
              <p key={idx} className="flex items-center text-sm gap-x-2">
                <CheckCircle2 className="h-4 w-4 fill-cyan-500 text-white" />{' '}
                {feature}
              </p>
            ))}
            <button
              onClick={handlePayStackPayment}
              disabled={isLoading}
              className={
                !isLoading
                  ? 'w-full flex items-center justify-center text-center rounded-full border border-cyan-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 hover:border-slate-900 mt-6 transition-all outline-none text-sm py-2'
                  : 'w-full flex items-center justify-center text-center rounded-full border border-cyan-700  mt-6 transition-all outline-none text-sm py-2'
              }
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 text-fuchsia-500 animate-spin" />
              ) : (
                'Choose Plan'
              )}
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={closeModal}
        className="md:absolute fixed right-4 top-4 flex flex-col items-center justify-center w-8 h-8 bg-red-500 hover:bg-red-400 rounded-full"
      >
        {' '}
        <X className="h-5 w-5 text-white" />{' '}
      </button>
    </section>
  );
};

export default ProModal;
