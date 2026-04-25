import { useLoggedInContext } from "../contexts/Loggedin";

function Profile() {
  const { loggedIn, isLoggedIn } = useLoggedInContext();

  return (
    <>
      {isLoggedIn() ? (<>

      {Object.entries(loggedIn).map(([key, value]) => (
        <p key={key}>{key}: {value}</p>
      ))}
        </>) 
      : (<p>Niste prijavljeni</p>)}
    </>
  );
}

export default Profile;
