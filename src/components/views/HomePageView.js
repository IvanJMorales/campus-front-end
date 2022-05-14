import { Link } from 'react-router-dom';
import './styles/HomePageView.css';







function HomePageView() {
    return (
        <div>
            <nav className='navbar'>
                <Link to='/' className='linkHome'>CMS CAMPUS MANAGEMENT SYSTEM</Link>
                <Link to='/' className='link'>HOME</Link>
                <Link to='/campuses' className='link'>CAMPUSES</Link>
                <Link to='/students' className='link'>STUDENTS</Link>
            </nav>
            <p>Select an option in the top right corner to get started</p>
        </div>
    );
}

export default HomePageView;