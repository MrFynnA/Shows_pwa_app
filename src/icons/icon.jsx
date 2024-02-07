export function CloseIcon(props) {
    const{pathClassName,className}=props
    return (
      <svg id="Layer_1" className={`w-6 ${className}`} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path className={pathClassName} d="m479.8 512a31.988 31.988 0 0 1 -22.769-9.432l-190.293-190.288a15.184 15.184 0 0 0 -21.475 0l-190.288 190.288a32.2 32.2 0 0 1 -45.543-45.542l190.288-190.289a15.183 15.183 0 0 0 0-21.474l-190.288-190.288a32.2 32.2 0 1 1 45.542-45.543l190.289 190.288a15.184 15.184 0 0 0 21.476 0l190.287-190.288a32.2 32.2 0 0 1 45.543 45.543l-190.289 190.288a15.185 15.185 0 0 0 0 21.474l190.289 190.288a32.2 32.2 0 0 1 -22.769 54.975z" fill="white"></path></svg>
    )
  }

  export function Backbtn({onClick}){
    return(
      <svg id="svg6" onClick={onClick} className="w-6 cursor-pointer" clipRule="evenodd" fillRule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="fill-white" id="path2" d="m5.414 13 5.293 5.293c.39.39.39 1.024 0 1.414s-1.024.39-1.414 0l-7-7c-.391-.39-.391-1.024 0-1.414l7-7c.39-.39 1.024-.39 1.414 0s.39 1.024 0 1.414l-5.293 5.293h13.586c.796 0 1.559.316 2.121.879.563.562.879 1.325.879 2.121v3c0 .552-.448 1-1 1s-1-.448-1-1c0 0 0-1.608 0-3 0-.265-.105-.52-.293-.707-.187-.188-.442-.293-.707-.293z"></path></svg>
    )
  }
  

  export function ScrollTopArrow(props) {
    const {className,pathclassName}=props
    return (
      <div>
        <svg className={className} width={'2rem'} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="Layer_2" data-name="Layer 2"><path className={pathclassName} fill='black' d="m9.71 17.71 6.29-6.3 6.29 6.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-7-7a1 1 0 0 0 -1.42 0l-7 7a1 1 0 0 0 1.42 1.42z"></path><path className={pathclassName} fill='black' d="m16.71 14.29a1 1 0 0 0 -1.42 0l-7 7a1 1 0 0 0 1.42 1.42l6.29-6.3 6.29 6.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"></path></g></svg>
      </div>
    )
  }
  
  export default ScrollTopArrow