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
                <div className='flex flex-col justify-center xl:justify-start items-center xxl:contents '>
                    {/* Logo */}
                    <Link href="/" className='flex  items-center p-2'>
                        <Image src="/logo.png" alt='logo' width={28} height={28} />
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
                        className='xxl:hidden my-4 bg-white text-black rounded-full h-8 w-8 xxl:h-12  m-2 xxl:m-0 xxl:w-12 flex items-center justify-center '
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
                <div className='flex items-center justify-center  xxl:justify-between'>
                    <div className='flex  items-center gap-2'>
                        <div className='h-8 w-8 xxl:h-10  xxl:w-10 relative rounded-full overflow-hidden'>
                            <Image src="/avatarNew.png" alt='lama dev' fill />
                        </div>
                        <div className='hidden xxl:flex flex-col'>
                            <span className='font-bold'>Akshay Akhade</span>
                            <span className='text-sm text-textGray'>@akWebDev</span>
                        </div>
                    </div>
                    <div className='hidden xxl:block cursor-pointer font-bold'>...</div>
                </div>
            </div>
        </>
    )
}

export default LeftBar