import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

const Gallery = () => {
  const [ artworks , setArtworks] = useState([])

  useEffect(()=>{
      axios.get('./ART.json')
      .then(response => {
          console.log(response.data);
          setArtworks(response.data);
      }) // Success
      .catch(error => {
          console.log(error);
      }) // Error
  }, []) // Dependince array left empty so it only runs once

  const ArtworkCard = ({artworks}) => {
      const mappedArtworks = artworks.map((artwork, index) => {
          return (

            // <div className='gallery-container'>
      
            //   <div className='art-card-details'>
              <div className='art-contianer' key={index}>
                 
                      <div className='gallery-container'>

                          <div className='art-card'>
                            <img className='gallery-image' src={artwork.artwork_image} />     
                            <div className='art-details'>
                              <h1>{artwork.artwork_title}</h1>
                              <p>{artwork.desription}</p>
                              <h3>Year: {artwork.release_year}</h3>
                              <h3>Genre: {artwork.genre}</h3>
                            </div>
                          </div>

                      </div>
                      
                  
              </div>

          ) 
      })

      return (
          <>
              {mappedArtworks}
          </>
      )
  }

return (
  <div className='artwork-holder'>
      <ArtworkCard artworks = {artworks}/>
  </div>
)
}

export default Gallery
