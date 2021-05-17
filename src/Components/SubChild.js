import {Mycontext} from "../App";
import {useContext} from "react";

export default function SubChild({msg}) {
   let s = useContext(Mycontext)

    return (
        <div>
            SubChild
            {s} !!!

            {/*<Mycontext.Consumer>*/}
            {/*    {*/}
            {/*        (val) => {*/}
            {/*            return <div>{val} !!!!!</div>*/}
            {/*        }*/}
            {/*    }*/}
            {/*</Mycontext.Consumer>*/}
        </div>
    );
}