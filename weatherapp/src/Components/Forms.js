import React ,{Component} from 'react'


const Forms = (props)=>{    
        return(
            <form onSubmit={props.getWeather}>
                <input type="text" name="city" placeholder="Enter  your City..."/>
                <input type="text" name="country" placeholder="Enter  your Country..."/>
                <button>Get Weather</button>  
            </form>
        )
}

export default Forms; 