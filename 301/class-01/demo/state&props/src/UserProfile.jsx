function UserProfile(props) {

  // ===============================
  // DEMO: ACCESSING PROPS
  // ===============================

  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.bio}</p>
    </div>
  );
}

export default UserProfile;