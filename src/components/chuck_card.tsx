// 💡 You can import assets like images directly and use them in your components:
import ChuckImage from '../assets/chuck_norris.jpg';

interface ChuckCardProps {
chuckgreeting:string;
}

const ChuckCard: React.FC<ChuckCardProps> = ({chuckgreeting}) => {

	return (
		// 💡 This weird-looking `<>` thing is a "Fragment". Each component must have exactly one child.
		// 💡 As a result, sometimes it is useful to wrap components in Fragments like this:
		<>
			{/* 💡 We can insert JavaScript into our JSX using curly braces like the ones below in the h2 */}
			<h2>{chuckgreeting}</h2>

			{/* <img src={'Chuck image here!'} alt='A handsome man' /> */}
			<img src={ChuckImage} alt='A handsome man' />
		</>
	)
}

export default ChuckCard;
