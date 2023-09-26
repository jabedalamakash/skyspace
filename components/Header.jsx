import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <section className="w-full py-5 border-b-2">
            <main className='flex w-[90%] mx-auto flex-col flex-wrap items-center justify-between sm:flex-row'>
            <div className='mb-5 sm:mb-0'>
            <Link href="/">
            <nav className='flex items-center  space-x-5'>
            <Image
            src={"/images/planet.png"}
            height={20}
            width={20}
            alt="logo"
            className="w-20 h-20" />
            <h2 className='text-3xl font-bold'>SkySpace</h2>

            </nav>   
            </Link>

            </div>



            <div className='flex space-x-5'>
            <Link href="/">Rockets</Link>
            <Link href="/dragons">Dragons</Link>
            <Link href="/missions">Missions</Link>
            <span className='border border-black '></span>
            <Link href="/profile">My Profile</Link>

            </div>

            

            
        </main>

        </section>

    );
};

export default Header;