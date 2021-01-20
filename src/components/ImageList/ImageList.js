import React from 'react'
import './ImageList.css'
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';



function ImageList({ photos }) {
 return (
  <>
   <GridList cellHeight={375} cols={3}>
    {photos.map((img, i) => (
     <GridListTile key={i} cols={(img.width / 3600).toFixed(0)} className='img-list'>
      <img src={img.urls.regular} alt={img.alt_description} />
      <GridListTileBar title={img.description} subtitle={img.user.name} />
     </GridListTile>
    ))}
   </GridList>
  </>
 )
}

export default ImageList
