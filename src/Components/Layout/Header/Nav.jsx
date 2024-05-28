import React from 'react'
import { navOptions } from './HeaderData';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
      <div className="flex flex-row-reverse">
        {navOptions.map((nav, i) => (
          <Link key={i} to={nav.href}>
            <p className="text-white p-2.5">
              {nav.title}
            </p>
          </Link>
        ))}
      </div>
    );
  };

export default Nav

