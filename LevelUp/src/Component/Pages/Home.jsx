import React from 'react';
import { Link } from 'react-router-dom';
import Crousel from './Crousel';
import WebFooter from './WebFooter';
import CourseCard from './CourseCard';
function Home() {
	return (
		<div>
			<section className="mb-40">
				{/* <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
					<div className="px-4 w-full flex flex-wrap items-center justify-between">
						<div className="flex items-center">
							<button
								className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#navbarSupportedContentY"
								aria-controls="navbarSupportedContentY"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									className="w-5"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 448 512"
								>
									<path
										fill="currentColor"
										d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
									></path>
								</svg>
							</button>
							<a className="navbar-brand text-blue-600" href="#!">
								<svg
									className="w-5 h-5 ml-2 lg:ml-0 mr-2"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 576 512"
								>
									<path
										fill="currentColor"
										d="M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"
									></path>
								</svg>
							</a>
						</div>
						<div
							className="navbar-collapse collapse grow items-center"
							id="navbarSupportedContentY"
						>
							<ul className="navbar-nav mr-auto lg:flex lg:flex-row">
								<li className="nav-item">
									<a
										className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
										href="#!"
										data-mdb-ripple="true"
										data-mdb-ripple-color="light"
									>
										Dashboard
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
										href="#!"
										data-mdb-ripple="true"
										data-mdb-ripple-color="light"
									>
										Team
									</a>
								</li>
								<li className="nav-item mb-2 lg:mb-0">
									<a
										className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
										href="#!"
										data-mdb-ripple="true"
										data-mdb-ripple-color="light"
									>
										Projects
									</a>
								</li>
							</ul>
						</div>
						<div className="flex items-center lg:ml-auto">
							<Link
								to={'/login'}
								type="button"
								className="inline-block px-6 py-2.5 mr-2 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
								data-mdb-ripple="true"
								data-mdb-ripple-color="light"
							>
								Login
							</Link>
							<Link
								to={'/signup'}
								type="button"
								className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
								data-mdb-ripple="true"
								data-mdb-ripple-color="light"
							>
								Sign up for free
							</Link>
						</div>
					</div>
				</nav> */}

				<div className="text-center bg-gray-50 text-gray-800 py-24 px-6">
					<h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
						Level up your experience <br />
						<span className="text-blue-600">for Industry</span>
					</h1>
					<a
						className="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						data-mdb-ripple="true"
						data-mdb-ripple-color="light"
						href="#!"
						role="button"
					>
						Get started
					</a>
					<a
						className="inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
						data-mdb-ripple="true"
						data-mdb-ripple-color="light"
						href="#!"
						role="button"
					>
						Learn more
					</a>
				</div>
				<div className="w-full">
					<Crousel />
				</div>
				<h1 className="text-xl font-bold flex-start mt-5 ">World of courses</h1>
				<CourseCard />
			</section>
		</div>
	);
}
export default Home;
