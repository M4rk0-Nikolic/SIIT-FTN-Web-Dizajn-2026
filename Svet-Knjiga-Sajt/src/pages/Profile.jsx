import { useLoggedInContext } from "../contexts/Loggedin";

function Profile() {
  const { isLoggedIn } = useLoggedInContext();

  return (
    <>
      isLoggedIn() ? (<>
        <p>Ovo je profil</p>
        </>) 
      : (<p>Niste prijavljeni</p>)
    </>
  );
}
