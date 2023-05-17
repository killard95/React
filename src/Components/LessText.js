import {useState} from'react';

export default function LessText({text, maxLength}) {
    const [hidden, setHidden] = useState(true)
    
    if(text.length <= maxLength ){
      return <span>{text}</span>
    }
    
    let url=""
    return(
      <>
        <span>
          { hidden ? `${text.substr(0,maxLength).trim() }...` : text }
          { hidden ? (
            <a href={url} onClick={(event) => {
                event.preventDefault()
                setHidden(false)
            }}> Plus</a>
          ) : (
            <a href={url} onClick={(event) => {
                event.preventDefault()
                setHidden(true)
            }}> Moins</a>
          )}
        </span>
      </>
    );
}