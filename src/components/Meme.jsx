import React from "react";

export default function Meme(){


    const [allMemeImages, setAllMemeImages] = React.useState({})

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        image: "" 
    })

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(responseData => setAllMemeImages(responseData))
    }, [])

    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(oldValues => ({
            ...oldValues,
            image: url
        }))

    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(oldValues => {
            return{
                ...oldValues,
                [name]: value
            }
        })
    }


    return(
        <main className="meme">
            <div className="meme--form">
                <div className="meme--form-input">
                    <input 
                        className="meme--form-top" 
                        type="text" 
                        placeholder="Top Text" 
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange} >
                    </input>
                    <input 
                        className="meme--form-bottom" 
                        type="text" 
                        placeholder="Bottom Text" 
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange} >
                    </input>
                </div>
                <button onClick={getMemeImage} className="meme--form-button">
                    Get a new meme image 🖼
                </button>
                <div className="meme--final">
                    <img className="meme--image" src={meme.image} />
                    {meme.image && <h2 className="meme--text meme--text-top">{meme.topText}</h2>}
                    {meme.image && <h2 className="meme--text meme--text-bottom">{meme.bottomText}</h2>}
                </div>
            </div>
        </main>
    )
}