import react, { Fragment } from 'react'

const Headercolor =  (props) => {
    

    const clickMe = (prop) => {
        console.log('Clicked', props.children);
        props.setClicked(prop) 
        
    }; 

    const element = <a onClick={() => clickMe(props.children)} className={ props.isActive ? 'capitalize text-blue-700' : 'capitalize'} >{props.children} </a>;

        
    return (
        element
        );
}
export default Headercolor;