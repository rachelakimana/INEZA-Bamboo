import react, { Fragment } from 'react'

const Headercolor = ({isActive, setClicked, children}) => {
    

    const clickMe = (name) => {
        console.log(name)
        setClicked(name)      
    }; 

    const element = <a onClick={() => clickMe(children)} className={isActive ? 'capitalize text-blue-700' : 'capitalize'} >{children} </a>;

        
    return (
        element
        );
}
export default Headercolor;