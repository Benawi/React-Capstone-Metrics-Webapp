import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophoneAlt, faUserCog, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      {location.pathname === '/' && (
      <nav>
        <div>
          <FontAwesomeIcon icon={faArrowLeft} onClick={() => navigate(-1)} />
          <i className="fas fa-chevron" />
          {new Date().getFullYear()}
        </div>
        <div>
          WORLD COVID CASES
        </div>
        <div>
          <FontAwesomeIcon icon={faMicrophoneAlt} />
          <FontAwesomeIcon icon={faUserCog} />
          <i className="fas fa-microphone" />
          <i className="fas fa-cog" />
        </div>
      </nav>
      )}
      {location.pathname !== '/' && (
        <nav>
          <div>
            <FontAwesomeIcon icon={faArrowLeft} onClick={() => navigate(-1)} />
            <Link to="/"><i className="fas fa-chevron-left" /></Link>
          </div>
          <div>
            DETAIL COVID CASES
          </div>
          <div>
            <FontAwesomeIcon icon={faMicrophoneAlt} />
            <FontAwesomeIcon icon={faUserCog} />
            <i className="fas fa-microphone" />
            <i className="fas fa-cog" />
          </div>
        </nav>
      )}
    </>
  );
}

export default Header;
