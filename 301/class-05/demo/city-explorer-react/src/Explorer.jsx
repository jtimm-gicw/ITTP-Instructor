/**
 * =========================================================
 * FILE: Explorer.jsx
 * =========================================================
 *
 * POINTER:
 * This is the MOST IMPORTANT component in the demo.
 *
 * This file demonstrates:
 * - useState()
 * - event handling
 * - conditional rendering
 * - passing props

 * NEXT GO TO:
 * -> Map.jsx
 * THEN:
 * -> Restaurants.jsx
 */

import { useState } from 'react';

import Map from './Map';
import Restaurants from './Restaurants';

/**
 * Fake local data
 *
 * Later in the course,
 * students will replace this with API data.
 */

import locationData from './fake-data/location.json';
import restaurantsData from './fake-data/restaurants.json';

/**
 * Local image import
 */

import map from './images/map.png';

function Explorer() {

  /**
   * =====================================================
   * STATE
   * =====================================================
   *
   * displayResults controls whether
   * results appear on screen.
   *
   * Initial value:
   * false
   *
   * Meaning:
   * "Do NOT show results yet."
   */

  const [displayResults, setDisplayResults] = useState(false);


  /**
   * =====================================================
   * EVENT HANDLER
   * =====================================================
   *
   * This function runs when the form submits.
   */

  function handleLocationSearch(event) {

    /**
     * Prevent page refresh
     */

    event.preventDefault();

    /**
     * Update state
     *
     * IMPORTANT:
     * Changing state causes React to RE-RENDER.
     */

    setDisplayResults(true);

  }

  return (

    <div id="main">

      {/* =================================================
          SEARCH FORM
         ================================================= */}

      <form onSubmit={handleLocationSearch} id="search-form">

        <label>Search for a location</label>

        <input
          type="text"
          name="search"
          id="input-search"
          placeholder="Enter a location here"
        />

        <button type="submit">

          Explore!

        </button>

      </form>


      {/* =================================================
          CONDITIONAL RENDERING
         =================================================

         IMPORTANT:
         This is the CORE concept of the lesson.

         BEFORE BUTTON CLICK:
         displayResults === false

         Result:
         NOTHING renders

         AFTER BUTTON CLICK:
         displayResults === true

         Result:
         React renders the Map and Restaurants components

         CONDITIONAL RENDERING PATTERN:
         {condition && <Component />}

      ================================================= */}

      {displayResults &&

        <div>

          {/* =============================================
              Passing props into Map component
             ============================================= */}

          <Map
            location={locationData}
            map={map}
          />

          {/* =============================================
              Passing props into Restaurants component
             ============================================= */}

          <Restaurants
            restaurants={restaurantsData}
            location={locationData}
          />

        </div>

      }

    </div>

  )
/*
 NEXT GO TO:
 -> Map.jsx
 
  THEN:
 -> Restaurants.jsx
*/
}

export default Explorer;