import React from 'react';
import Image from 'next/image';
import { logoutAccount } from '@/lib/actions/user.actions';
import { useRouter } from 'next/navigation';

interface FooterProps {
  user: {
    name: string;
    email: string;
  };
  type?: 'desktop' | 'mobile';
}

const Footer: React.FC<FooterProps> = ({ user, type = 'desktop' }) => {
  const router = useRouter();

  const handleLogOut = async () => {
    const loggedOut = await logoutAccount();
    if (loggedOut) router.push('/sign-in');
  };

  return (
    <footer className={`footer w-full ${type === 'mobile' ? 'text-center' : 'text-left'}`}>
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white">
          <p className="text-xl font-bold">{user?.name[0]}</p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg truncate text-gray-700 font-semibold">{user?.name}</h1>
          <p className="text-sm truncate text-gray-600">{user?.email}</p>
        </div>
        <div
          className="footer_image flex items-center justify-center w-12 h-12 rounded-full text-white cursor-pointer"
          onClick={handleLogOut}
        >
          <Image src="/icons/logout.svg" width={20} height={20} alt="Logout" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
