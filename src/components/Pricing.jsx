import { Link } from 'react-router-dom';

import { CheckCircle2 } from 'lucide-react';
import { pricing } from '../utils/pricing';

const Pricing = () => {
  return (
    <div className="mt-8 md:mt-0 w-full flex justify-center items-center gap-x-8 px-10 md:px-20 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {pricing.map((card) => (
          <div
            key={card.price}
            className="flex flex-col gap-y-2 bg-slate-900 rounded-lg w-full py-5 px-6"
          >
            <h4 className="text-lg inline-block text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text font-bold">
              {card.title}
            </h4>
            <p className="font-semibold text-base text-gray-300 mb-2 pb-2 border-b border-fuchsia-400">
              <span className="text-lg inline-block text-transparent text-center bg-gradient-to-r from-fuchsia-500 to-blue-500 bg-clip-text">
                {card.price}$ /
              </span>{' '}
              month
            </p>
            <p className="text-sm text-gray-30 mb-4">{card.description}</p>
            {card.features.map((feature, idx) => (
              <p key={idx} className="flex items-center text-sm gap-x-2">
                <CheckCircle2 className="h-4 w-4 fill-cyan-500 text-white" />{' '}
                {feature}
              </p>
            ))}
            <Link
              to={'/auth/sign_in'}
              className="w-full text-center rounded-full border border-cyan-500 hover:border-0 hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 mt-6 outline-none text-sm py-2"
            >
              Choose Plan
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
