import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, Search } from 'lucide-react'
import { FaSpider } from 'react-icons/fa6'
import { ModeToggle } from '@/components/mode-toggle'
function Header() {
	const location = useLocation()

	const isActive = (path: string) => location.pathname === path

	return (
		<div className="flex justify-between items-center p-4  rounded-lg md:px-20 border-b-2">
			<div className="flex gap-5   items-center">
				<FaSpider size={25} />
				<h1 className="font-bold font-mono text-lg tracking-widest">KUMO</h1>
			</div>
			<div className="flex gap-5   items-center">
				<Button
					variant={isActive('/dashboard') ? 'default' : 'link'}
					asChild
					className="text-md hidden sm:flex"
				>
					<Link to="/dashboard" className="flex items-center">
						<LayoutDashboard className="mr-2" />
						Dashboard
					</Link>
				</Button>
				<Button
					variant={isActive('/search') ? 'default' : 'link'}
					asChild
					className="text-md hidden sm:flex"
				>
					<Link to="/search" className="flex items-center">
						<Search className="mr-2" />
						Search
					</Link>
				</Button>

				<Button variant={isActive('/dashboard') ? 'default' : 'link'} asChild className="sm:hidden">
					<Link to="/dashboard">
						<LayoutDashboard />
					</Link>
				</Button>
				<Button variant={isActive('/search') ? 'default' : 'link'} asChild className="sm:hidden">
					<Link to="/search">
						<Search />
					</Link>
				</Button>

				<Link to="/profile">
					<Avatar className="h-11 w-11 cursor-pointer">
						<AvatarImage src="https://github.com/sakthilkv.png" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</Link>
				<ModeToggle></ModeToggle>
			</div>
		</div>
	)
}

export default Header
