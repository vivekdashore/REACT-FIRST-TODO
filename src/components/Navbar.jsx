import ReactLogo from "../assets/react.svg"
const Navbar = () => {
  return (
    <nav>
      <h1> <img src={ReactLogo} alt="logo" /> ToDo App</h1>  //if we upload image from assets folder
      {/* <h1> <img src="../../public/vite.svg" alt="logo" /> ToDo App</h1> */} //if we upload image from public folder
    </nav>
  )
}

export default Navbar
