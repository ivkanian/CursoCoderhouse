import './Button.css'

const Button =({label,backgroundColor,color})=>{
    return( 
    <button
        className='Button'
        style={{
            backgroundColor:backgroundColor,
            color:color
        }}
    >
        {label}
    </button>

    )
}
export default Button