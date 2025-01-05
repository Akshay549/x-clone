import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const menuList = [
    {
        id: 1,
        name: "Homepage",
        link: "/",
        icon: "home.svg",
    },
    {
        id: 2,
        name: "Explore",
        link: "/",
        icon: "explore.svg",
    },
    {
        id: 3,
        name: "Notification",
        link: "/",
        icon: "notification.svg",
    },
    {
        id: 4,
        name: "Messages",
        link: "/",
        icon: "message.svg",
    },
    {
        id: 5,
        name: "Bookmarks",
        link: "/",
        icon: "bookmark.svg",
    },
    {
        id: 6,
        name: "Jobs",
        link: "/",
        icon: "job.svg",
    },
    {
        id: 7,
        name: "Communities",
        link: "/",
        icon: "community.svg",
    },
    {
        id: 8,
        name: "Premium",
        link: "/",
        icon: "logo.svg",
    },
    {
        id: 9,
        name: "Profile",
        link: "/",
        icon: "profile.svg",
    },
    {
        id: 10,
        name: "More",
        link: "/",
        icon: "more.svg",
    },
];

const LeftBar = () => {
    return (
        <>
            <div>
                {/* Logo menu and button */}
                <div className=''>
                    {/* Logo */}
                    <Link href="/" className='flex items-center p-2'>
                        <Image src="/logo.png" alt='logo' width={24} height={24} />
                    </Link>
                    {/* Menu List */}
                    <div className='flex flex-col'>
                        {
                            menuList.map((item) => {
                                return (
                                    <Link href={item.link} key={item.id} className='p-2 rounded-full hover:bg-[#181818] flex items-center gap-4'>
                                        <Image src={`icons/${item.icon}`}
                                            alt={item.name}
                                            width={24}
                                            height={24}
                                        />
                                        <span className='hidden xxl:inline'>{item.name}</span>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    {/* Button */}
                    <Link href="/"
                        className='xxl:hidden my-4 bg-white text-black rounded-full w-12 h-12 flex items-center justify-center '
                    >
                        <Image src="icons/post.svg" alt='new post' width={24} height={24} />
                    </Link>
                    <Link href="/"
                        className='hidden xxl:block my-4 bg-white text-black rounded-full font-bold py-2 px-20 '
                    >
                        Post
                    </Link>
                </div>
                {/* User */}
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <div className='h-10 w-10 relative rounded-full overflow-hidden'>
                            <Image src="/general/avatar.png" alt='lama dev' fill />
                        </div>
                        <div className='hidden xxl:flex flex-col'>
                            <span className='font-bold'>Lama Dev</span>
                            <span className='text-sm text-textGray'>@lamaWebDev</span>
                        </div>
                    </div>
                    <div className='hidden xxl:block cursor-pointer font-bold'>...</div>
                </div>
            </div>
        </>
    )
}

export default LeftBar