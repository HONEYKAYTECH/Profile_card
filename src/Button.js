


function Button(props) {
    return (
     <button style={{backgroundColor: props.color}}>
        {props.skill}
        {props.emoji}
     </button>
    );
  }
  
  export default Button;
  