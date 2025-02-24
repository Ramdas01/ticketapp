import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../features/auth/authSlice'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  // Accessing user from Redux state
  const { user } = useSelector((state) => state.auth)
  
  // Function for logout
  const onLogout = () => {
    dispatch(logout())  // Log the user out by dispatching the logout action
    navigate('/')  // Redirect to home page after logout
  }

  // Function to navigate to dashboard
  const handleClick = () => {
    navigate('/dashboard')
  }

  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>Support Desk</Link>
      </div>
      <ul>
        {user ? (
          <>
            <li>
              <button className='btn' onClick={onLogout}>
                <FaSignOutAlt /> Logout
              </button>
            </li>
            {user.isAdmin && (
              <li>
                <button className='btn' onClick={handleClick}> 
                  Dashboard
                </button>
              </li>
            )}
          </>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header
