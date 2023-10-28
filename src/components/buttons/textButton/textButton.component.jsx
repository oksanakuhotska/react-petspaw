import { 
	BaseTextButton,
	NavCardButton,
	BreedsNameButton,
	BreedsId,
} from './textButton.styles';

export const TEXT_BUTTON_TYPE_CLASSES = {
	base: 'base',
	navcard: 'nav-card-button',
	breedsname: 'Breeds-name-button',
	breedsid: 'breeds-id-button',
};

const getButton = (buttonType = TEXT_BUTTON_TYPE_CLASSES.base) => (
	{
		[TEXT_BUTTON_TYPE_CLASSES.base]: BaseTextButton,
		[TEXT_BUTTON_TYPE_CLASSES.navcard]: NavCardButton,
		[TEXT_BUTTON_TYPE_CLASSES.breedsname]: BreedsNameButton,
		[TEXT_BUTTON_TYPE_CLASSES.breedsid]: BreedsId,
	}[buttonType]
);

const TextButton = ({ children, buttonType, ...otherProps }) => {
	const CustomButton = getButton(buttonType);

	return (
	<CustomButton {...otherProps}>{children}</CustomButton>
	);
};

export default TextButton;
