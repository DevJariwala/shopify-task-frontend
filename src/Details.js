import React, { useState } from 'react'
import "./Details.css"
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { useClipboard } from 'use-clipboard-copy'
import ShareIcon from '@material-ui/icons/Share';

function Details({item}) {

    const [like, setLike] = useState(false)
    const [copied, setCopied] = useState(false)
    const clipboard = useClipboard()

    const copyLink = ()=>{
        
        clipboard.copy(item?.hdurl)
        setCopied(true)
        alert("Link for sharing the image is copied")
    }

    return (
        <div className='container'>
            <img src={item?.hdurl} height='300px' width='100%' alt="image" style={{borderRadius:'5px 5px 0px 0px'}}  />
            <div className="details" >
                <p className='details__title'>{item?.title}</p>
                <p className='details__data'>{item?.date}</p>
                <p className='details__exp'>{item?.explanation}</p>
                {
                    like===true?(
                        <span onClick={()=>setLike(false)} style={{cursor:'pointer'}}><FavoriteIcon style={{color:'red'}} /></span>
                    ):(
                        <span onClick={()=>setLike(true)} style={{cursor:'pointer'}}><FavoriteBorderOutlinedIcon /></span>
                    )
                }
                <span onClick={copyLink} style={{cursor:'pointer'}}><ShareIcon /></span>
                
            </div>
        </div>
    )
}

export default Details
