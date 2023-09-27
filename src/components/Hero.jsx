import { logo } from '../assets';


const GITHUB_REPO = 'https://github.com/Rathetsu/Link-Digest';

const Hero = () => {
	return (
	<header className='w-full flex justify-center items-center flex-col'>
		<nav className='flex flex-row justify-between items-center w-full mb-10 pt-3'>
			{/* <img src={logo} alt='logo' className='w-2 h-2' /> */}
			<button
				type='button'
				className='black_btn'
				onClick={() => window.open(GITHUB_REPO, '_blank')}
			>
				Github Repository
			</button>
		</nav>
	</header>
  );
};

export default Hero;