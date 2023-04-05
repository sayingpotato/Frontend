import {Button} from '@components/authButton/style'

export default function AuthButton({onClick, title}){
    return (
        <Button onClick={onClick}>
            {title}
        </Button>
    )
}