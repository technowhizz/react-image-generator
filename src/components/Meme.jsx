import React from "react";

export default function Meme(){
    return(
        <main className="meme">
            <div className="meme--form">
                <div className="meme--form-input">
                    <input 
                        className="meme--form-top" 
                        type="text" 
                        placeholder="Top Text" >
                    </input>
                    <input 
                        className="meme--form-bottom" 
                        type="text" 
                        placeholder="Bottom Text" >
                    </input>
                </div>
                <button className="meme--form-button">Get a new meme image</button>
            </div>
        </main>
    )
}