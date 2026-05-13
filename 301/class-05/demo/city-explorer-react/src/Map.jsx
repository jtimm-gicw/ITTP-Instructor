/**
 * =========================================================
 * FILE: Map.jsx
 * =========================================================

 * This component demonstrates:
 * - receiving props
 * - conditional rendering
 * - dynamic JSX
 *
 * IMPORTANT:
 * Props flow:
 *
 * Parent -> Child
 *
 * Explorer.jsx is the parent component.
 */

function Map(props) {

  return (

    <div id="map">

      {/* ===============================================
          Dynamic rendering using props
         =============================================== */}

      <h3>

        Map of {props.location.search_query}

      </h3>


      {/* ===============================================
          CONDITIONAL RENDERING
         ===============================================

         ONLY render the image IF props.map exists.

         WHY?
         This helps prevent rendering errors.

         Pattern:
         {condition && <Something />}

      =============================================== */}

      {props.map &&

        <img src={props.map} />

      }

    </div>

  )

}

export default Map;