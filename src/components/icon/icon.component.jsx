import sprite from '../../assets/images/sprite.svg'

export const Icon = ({ icon }) => (
	<svg>
		<use href={`${sprite}#${icon}`} />
	</svg>
);