import { LabelComponent } from "./style";

export default function Label({title, onClick}){
    return (
        <LabelComponent onClick={onClick}>
            {title}</LabelComponent>
    )
}