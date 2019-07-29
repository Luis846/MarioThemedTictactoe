import React from 'react';


export class Audio extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
            <span>
            
		<audio className="audioOne" autoPlay>
			<source
				src="http://23.237.126.42/ost/super-mario-bros/khbnvkqp/01%20-%20Super%20Mario%20Bros.mp3"
				type="audio/mp3"
			/>
		</audio>
            </span>
        )
    }
}