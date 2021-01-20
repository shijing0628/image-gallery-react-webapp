import React, { useEffect, useState } from 'react';
import './GalleryImages.css';
import { Container } from '@material-ui/core'
import axios from 'axios';
import InputSearch from '../InputSearch/InputSearch';
import ImageList from '../ImageList/ImageList';
import { CircularProgress } from '@material-ui/core';

//https://unsplash.com/documentation#search-photos

function GalleryImages() {

 const [photos, setPhotos] = useState();
 const [loading, setLoading] = useState(true);
 const [formData, setFormData] = useState('');
 const api = process.env.REACT_APP_API_KEY;



 const fetchData = async (input) => {
  setLoading(true);
  const res = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${input}&client_id=${api}&per_page=20`);

  const data = await res.data;
  setPhotos(data);
  setLoading(false);
 };

 const handleChange = (e) => {
  setFormData(e.target.value);
 }

 const handleSubmit = (e) => {
  e.preventDefault();
  fetchData(formData);

 }

 useEffect(() => {
  fetchData();
 }, []);


 if (loading)
  return (<div className='loading'>
   <h1><CircularProgress size={60} color='primary' /></h1>
  </div>);

 return (
  <Container>
   <h1>Gallery Pictures</h1>
   <InputSearch change={handleChange} submit={handleSubmit} />
   <ImageList photos={photos.results} />
  </Container>
 )
}

export default GalleryImages
