import React from 'react'

const Biography = () => {
  return (
    <>
      <div id='bioSection'>
        <div className='bio-content'>
          <div id='artist-image'></div>
          <div  className='bio-and-timeline-wrapper'>
            <div className='bio'>
              <h3>About Rembrandt</h3>
              <p><strong>Rembrandt Harmenszoon van Rijn (1606–1669)</strong> was a Dutch painter and etcher, widely regarded as one of the greatest visual artists in history and the most important in Dutch art history. His works are characterized by rich color, dramatic use of light and shadow, and a profound psychological depth that captures the complexity of human emotion. Rembrandt's subjects ranged from portraits and self-portraits to historical scenes, landscapes, and biblical themes. He lived during the Dutch Golden Age, a period of great wealth and cultural achievement in the Netherlands.</p>
            </div>
            <div className='timeline'>
              <h3>Timeline of Key Life Events</h3>
              <ul>
                <li><strong>1606:</strong> Rembrandt is born on July 15 in Leiden, Netherlands.</li>
                <li><strong>1620:</strong> Begins studying at the University of Leiden but leaves to pursue art under the tutelage of Jacob van Swanenburgh.</li>
                <li><strong>1624-1625:</strong> Studies under Pieter Lastman in Amsterdam, who greatly influences his style.</li>
                <li><strong>1625:</strong> Returns to Leiden and opens his own studio.</li>
                <li><strong>1631:</strong> Moves to Amsterdam, where he gains fame as a portrait artist.</li>
                <li><strong>1634:</strong> Marries Saskia van Uylenburgh, cousin of a successful art dealer, which enhances his career.</li>
                <li><strong>1636-1642:</strong> Produces some of his most famous works, including "The Night Watch" (1642).</li>
                <li><strong>1642:</strong> Saskia dies, leaving Rembrandt with their son, Titus. This marks the beginning of his financial difficulties.</li>
                <li><strong>1656:</strong> Declares bankruptcy due to poor financial management and extravagant lifestyle.</li>
                <li><strong>1658-1662:</strong> Continues to create masterpieces, including "The Syndics of the Drapers' Guild" (1662).</li>
                <li><strong>1663:</strong> His long-time companion, Hendrickje Stoffels, dies.</li>
                <li><strong>1669:</strong> Rembrandt dies on October 4 in Amsterdam, leaving behind a legacy as one of the greatest artists in history.</li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Biography
