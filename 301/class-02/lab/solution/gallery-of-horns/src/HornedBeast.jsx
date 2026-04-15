/* eslint-disable react/prop-types */
// LAB 01 - FEATURE TASKS
// The HornedBeast component needs to contain an <h2> that displays the title of the animal, an <img> element with src, alt and title attributes, and a <p> that displays the description.

// LAB 02 - FEATURE TASKS
// Create state inside of the HornedBeast component that keeps track of the number of times an image was clicked.
// Put a heart in each horned beast with the number of times it was "favorited" next to it. - Check out https://emojipedia.org/ for a code-friendly heart emoji

import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function HornedBeast(props) {

  const [favorites, setFavorites] = useState('');

  function addFavorites() {
    setFavorites(favorites + '❤️');
  }


  return (
    <Col>
      <Card id="beast" className="h-100 p-3 fw-bold">
        <Card.Title className="fw-bold fs-3">{props.title}</Card.Title>
        <Card.Img
          className="beastImg"
          src={props.imageUrl}
          alt={props.description}
          title={props.title}
          onClick={addFavorites}
        />
        <Card.Body>
          <Card.Text className="beastDescription">{props.description}</Card.Text>
          <Card.Text className="heart">Favorites: {favorites}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default HornedBeast;
