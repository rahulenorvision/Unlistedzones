import React from "react";
import partner from './partner.jpg'


export default function BecomeOurPartner(){
    return(
        <>
        <div>
            <hr style={{width: "50em",margin: "0.5em 0em 0em 29em",color: "darkgray" }}/>
        <h1 style={{padding:"1.5em 0em 0em 6em",fontSize: "4em"}}>Become Our Partner</h1>
        <p style={{padding: "0em 0em 0em 17em",fontSize: "x-large"}}>Come And Join Unlistedzone's Partner Program</p>
        <img src={partner} alt="partnerImage" style={{width: "20em",height: "20em",    margin:"2em 0em 0em 31em"}}/>
        </div>
        </>
    )
}