import SubChild from "./SubChild";

export default function Child({msg}) {
    return (
        <div>
            Child
            <SubChild/>
        </div>
    );
}