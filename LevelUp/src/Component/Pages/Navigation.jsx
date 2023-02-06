import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchedCourse } from '../../Redux/Toolkit/CourseSlice';
function Navigation() {
	const dispatch = useDispatch();
	const [search, setSearch] = useState('');
	function logOut() {
		localStorage.removeItem('token');
	}
	return (
		<div className="relative">
			<nav
				id="header"
				className="w-full z-30  fixed py-1 bg-white shadow-lg border-b border-blue-400"
			>
				<div className="w-full flex items-center justify-between mt-0 px-6 py-2">
					<label for="menu-toggle" className="cursor-pointer md:hidden block">
						<svg
							className="fill-current text-blue-600"
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 20 20"
						>
							<title>menu</title>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
						</svg>
					</label>
					<input className="hidden" type="checkbox" id="menu-toggle" />

					<div
						className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
						id="menu"
					>
						<nav>
							<ul className="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
								<li>
									<Link
										className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
										to="/"
									>
										Home
									</Link>
								</li>
								<li>
									<a
										className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
										href="#"
									>
										Products
									</a>
								</li>
								<li>
									<Link
										to="/about"
										className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
									>
										About
									</Link>
								</li>
							</ul>
						</nav>
					</div>
					<div className=" ">
						<input
							onChange={(e) => setSearch(e.target.value)}
							type="text"
							className=" rounded-md border-1 h-8 border-solid placeholder:text-center text-center"
							placeholder="search courses"
						/>
						<button
							onClick={() => dispatch(searchedCourse(search))}
							className="bg-blue-500 rounded-sm px-2 py-1 ml-4 text-white font-semibold"
						>
							Search
						</button>
					</div>
					<div
						className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4"
						id="nav-content"
					>
						<div className="auth flex  items-center w-full md:w-full">
							<Link
								onClick={() => logOut()}
								to="/login"
								className="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700"
							>
								{/* {localStorage.getItem('token') !== undefined
									? 'Logout'
									: 'login'} */}
								LogIn
							</Link>
							<Link
								to="/signup"
								className="bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100"
							>
								Sign up
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navigation;