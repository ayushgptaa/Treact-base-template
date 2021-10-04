import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';

const Globalstyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap');

  body {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
     ${tw`font-display`}
  }
`;

export default Globalstyles;
