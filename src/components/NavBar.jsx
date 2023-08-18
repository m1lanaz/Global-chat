import { UserAuth } from "../context/AuthContexts"

function NavBar() {

  const {currentUser, logout} = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="navbar bg-neutral text-neutral-content">
        <div className="containerWrap flex justify-between">
            <a className="btn btn-ghost normal-case text-xl">InstantChat</a>
            {currentUser ? <buttton className="cursor-pointer	" onClick={handleLogout}>Logout</buttton> : ""}
        </div>
    </div>
  )
}

export default NavBar