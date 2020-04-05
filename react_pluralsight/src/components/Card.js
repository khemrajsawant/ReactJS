import React from 'react'


const Card = (props) => {

     // imp_1 from App const profile = props.profData
     const profile = props
        return (<div>
            <div className="github-profile" style={{margin:'1rem'}}>
            <img src={profile.avatar_url} alt='' style={{width:'75px'}}/>
          <div className="info" style={{display: 'inline-block', marginLeft: 10}}>
            <div className="name" style={{fontSize: '125%', fontWeight:'bold'}}>{profile.name}</div>
            <div className="company">{profile.company}</div>
          </div>
          </div></div>
        );
    
}

export default Card
