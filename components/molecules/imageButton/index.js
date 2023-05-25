import Button from "@atoms/button";
import Image from "@atoms/image";

const ImageButton = ({ className, src, alt, onClick, state }) => {
    return (
        <>
            <Button className={className} onClick={onClick} state={state}>
                <Image src={src} alt={alt} />
            </Button>
        </>
    );
};

export default ImageButton;