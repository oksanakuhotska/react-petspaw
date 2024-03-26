import { 
	BaseTextButton,
	NavCardButton,
	BreedsNameButton,
	BreedsId,
	UploadPhotoButton,
} from './textButton.styles';

export const TEXT_BUTTON_TYPE_CLASSES = {
	base: 'base',
	navcard: 'nav-card-button',
	breedsname: 'Breeds-name-button',
	breedsid: 'breeds-id-button',
	uploadphoto: 'upload-photo'
};

const getButton = (buttonType = TEXT_BUTTON_TYPE_CLASSES.base) => (
	{
		[TEXT_BUTTON_TYPE_CLASSES.base]: BaseTextButton,
		[TEXT_BUTTON_TYPE_CLASSES.navcard]: NavCardButton,
		[TEXT_BUTTON_TYPE_CLASSES.breedsname]: BreedsNameButton,
		[TEXT_BUTTON_TYPE_CLASSES.breedsid]: BreedsId,
		[TEXT_BUTTON_TYPE_CLASSES.uploadphoto]: UploadPhotoButton,
	}[buttonType]
);

const TextButton = ({ children, buttonType, ...otherProps }) => {
	const CustomButton = getButton(buttonType);

	return (
	<CustomButton {...otherProps}>{children}</CustomButton>
	);
};

export default TextButton;
