import sprite from '../../assets/images/sprite.svg'

const SpriteIcon = ({ icon }) => (
	<svg>
		<use href={`${sprite}#${icon}`} />
	</svg>
);

export default SpriteIcon;