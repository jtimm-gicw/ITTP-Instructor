/**
 * =========================================================
 * FILE: Restaurants.jsx
 * =========================================================
 *
 * Note
 * Map.jsx --> Restaurants.jsx...arrive here AFTER Map.jsx
 *
 * This component demonstrates:
 * - props
 * - array rendering
 * - map()
 * - conditional rendering
 *
 * IMPORTANT:
 * Arrays are commonly rendered in React using .map()
 */

function Restaurants(props) {

  return (

    <section id="weather">

      {/* ===============================================
          Dynamic JSX using props
         =============================================== */}

      <h3>

        Restaurants in {props.location.search_query}

      </h3>

      <ul>

        {/* =============================================
            CONDITIONAL RENDERING
           =============================================

           ONLY render restaurant data IF the array exists.

           This prevents errors when data is missing.

        ============================================= */}

        {props.restaurants &&

          /**
           * ===========================================
           * ARRAY RENDERING
           * ===========================================
           *
           * .map() loops through the array
           * and returns JSX for each item.
           */

          props.restaurants.map((place, idx) => (

            /**
             * IMPORTANT:
             * React requires a UNIQUE key
             * when rendering lists.
             */

            <li key={idx}>

              <p>

                Name: {place.restaurant}

              </p>

              <p>

                {place.restaurant} serves {place.cusine}
                food in {place.locality}

              </p>

            </li>

          ))

        }

      </ul>

    </section>

  )

}

export default Restaurants;