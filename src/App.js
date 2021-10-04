import Header from 'components/headers/light.js';
import AnimationRevealPage from 'helpers/AnimationRevealPage';
import Globalstyles from './Globalstyles';

function App() {
	return (
		<AnimationRevealPage disabled>
			<Globalstyles />
			<Header />
		</AnimationRevealPage>
	);
}

export default App;
