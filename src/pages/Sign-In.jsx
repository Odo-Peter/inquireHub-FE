import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { loginUser } from '../services/login';

import { EyeIcon, EyeOffIcon, Loader2 } from 'lucide-react';

import authLogo from '../assets/sign-in.png';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const displayPassword = () => {
    setShowPassword(true);
    const el = document.getElementById('show-password');
    el.setAttribute('type', 'text');
  };

  const hidePassword = () => {
    setShowPassword(false);
    const el = document.getElementById('show-password');
    el.setAttribute('type', 'password');
  };

  const handleUserLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const currentUser = await loginUser({
        email,
        password,
      });

      toast.success('Glad to have you back', {
        theme: 'dark',
        autoClose: 3000,
      });

      setTimeout(() => {
        setEmail('');
        setPassword('');
      }, 4000);

      window.localStorage.setItem('currentUser', JSON.stringify(currentUser));

      setTimeout(() => {
        navigate('/feed');
      }, 5000);
    } catch (err) {
      console.log(err);
      if (err.response.status === 500) {
        toast.error(`${err.response.statusText}`, {
          theme: 'dark',
          autoClose: 6000,
        });
        setEmail('');
        setPassword('');
      }
      if (err.response.status === 401) {
        toast.error('Wrong credentials, try again', {
          theme: 'dark',
          autoClose: 6000,
        });
      }
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="sprinkle relative flex flex-col md:grid md:grid-cols-2 items-center justify-between md:flex-row h-screen w-full md:gap-x-6 lg:gap-x-8 px-6 md:px-20 py-5">
      <div className="hidden md:block">
        <img src={authLogo} alt="auth-logo" className="object-fill" />
      </div>
      <div className="flex flex-col justify-center gap-y-6 h-full lg:px-10 w-[80vw] md:w-full">
        <div className="flex flex-col gap-y-2">
          <h1 className="font-bold text-2xl md:text-3xl">
            Sign in to{' '}
            <span className="font-extrabold inline-block text-transparent text-3xl bg-gradient-to-r from-fuchsia-500 to-blue-500 bg-clip-text">
              InquireHub
            </span>
          </h1>
          <p className="text-xs md:text-sm text-gray-400">
            Hey there, glad to have you back
          </p>
        </div>

        <div className="w-full">
          <form
            onSubmit={handleUserLogin}
            className="flex flex-col gap-y-6 text-gray-900"
          >
            <div>
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded-lg outline-none py-3 text-sm font-medium px-4 w-full placeholder:text-sm placeholder:text-gray-500 focus:placeholder:opacity-80 shadow-md focus:shadow-xl"
                placeholder="Enter email address..."
              />
            </div>
            <div className="relative">
              <input
                type="password"
                id="show-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border rounded-lg outline-none py-3 text-sm font-medium px-4 w-full placeholder:text-sm placeholder:text-gray-500 focus:placeholder:opacity-80 shadow-md focus:shadow-xl"
                placeholder="Enter your password..."
              />
              {showPassword ? (
                <EyeOffIcon
                  onClick={hidePassword}
                  className="h-6 w-6 absolute right-4 top-1/2 text-gray-500 -translate-y-1/2 cursor-pointer hover:text-gray-600"
                />
              ) : (
                <EyeIcon
                  onClick={displayPassword}
                  className="h-6 w-6 absolute right-4 top-1/2 text-gray-500 -translate-y-1/2 cursor-pointer hover:text-gray-600"
                />
              )}
            </div>
            <div className="mt-2">
              <p className="text-sm font-medium text-center text-gray-300">
                Don't have an account?{' '}
                <Link
                  to={'/auth/sign_up'}
                  className="inline-block text-transparent bg-gradient-to-r from-fuchsia-500 to-blue-500 bg-clip-text underline hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500"
                >
                  Sign Up
                </Link>
              </p>
            </div>

            <div>
              <button
                disabled={isLoading || !email || !password}
                type="submit"
                className={
                  !isLoading
                    ? 'border-none outline-none bg-gradient-to-r from-pink-500 to-blue-500 text-white text-center w-full py-[10px] rounded-full font-medium mt-6 transition-all hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500'
                    : 'border-none outline-none bg-gradient-to-r from-pink-500 to-blue-500 text-white text-center w-full py-[10px] rounded-full font-medium mt-6 opacity-80 cursor-not-allowed'
                }
              >
                {isLoading ? (
                  <span className="flex gap-2 justify-center items-center">
                    Sigining in...
                    <Loader2 className="h-4 w-4 text-white font-bold animate-spin" />{' '}
                  </span>
                ) : (
                  'Sign In'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
