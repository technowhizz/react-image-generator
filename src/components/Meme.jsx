import React from "react";
import MemesData from "../MemesData"

export default function Meme(){


    const [allMemeImages, setAllMemeImages] = React.useState(MemesData)

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        image: "http://i.imgflip.com/1bij.jpg" 
    })

    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(oldValues => ({
            ...oldValues,
            image: url
        }))

    }


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
                <button onClick={getMemeImage} className="meme--form-button">
                    Get a new meme image 🖼
                </button>
                <img className="meme--image" src={meme.image} />
            </div>
        </main>
    )
}