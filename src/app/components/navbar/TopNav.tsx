import {Navbar, NavbarBrand, NavbarContent} from "@heroui/navbar";
import {GiMatchTip} from "react-icons/gi";
import Link from "next/link";
import {Button} from "@heroui/button";
import NavLink from "@/app/components/navbar/NavLink";
import {auth} from "@/auth";
import UserMenu from "@/app/components/navbar/UserMenu";


const TopNav = async () => {
    const session = await auth();
    return (
        <Navbar maxWidth={'xl'}
                className="bg-gradient-to-r from-purple-400 to-purple-700"
                classNames={{
                    item: ["text-xl", "text-white", "uppercase", "data-[active=true]:text-yellow-200"]
                }}
        >
            <NavbarBrand as={Link} href="/">
                <GiMatchTip size={40} className="text-gray-200"/>
                <div className='font-bold text-3xl flex'>
                    <span className='text-gray-900'>Next</span>
                    <span className='text-gray-200'>Match</span>
                </div>
            </NavbarBrand>
            <NavbarContent justify="center" className="font-bold">
                <NavLink href="/members" label="Matches"/>
                <NavLink href="/lists" label="Lists"/>
                <NavLink href="/messages" label="Messages"/>
            </NavbarContent>
            <NavbarContent justify="end" className="font-bold">
                {session?.user ? (
                    <UserMenu user={session.user} />
                ) : (
                    <>
                        <Button as={Link} href={'/login'} variant={'bordered'} className={'text-white'}>Login</Button>
                        <Button as={Link} href={'/register'} variant={'bordered'}
                                className={'text-white'}>Register</Button>
                    </>
                )}
                {session ? (<UserMenu user={session.user}/>) : (<>
                    <Button as={Link} href="/login" variant="bordered" className="text-white">Login</Button>
                    <Button as={Link} href="/register" variant="bordered" className="text-white">Register</Button>
                </>)}
            </NavbarContent>
        </Navbar>
    );
};

export default TopNav;