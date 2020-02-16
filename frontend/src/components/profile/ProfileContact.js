import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileContact = ({ profile: { contacts, website, location } }) => {
  return (
    <div className='profile-contact bg-light'>
      <Fragment>
        <h2 className='text-primary'>Contact</h2>
      </Fragment>
      <p>{location && <span>{location}</span>}</p>
      <p>{contacts && <span>{contacts.phone}</span>}</p>
      <div className='line' />
      <div className='icons my-1'>
        {website && (
          <a href={website} target='_blank' rel='noopener noreferrer'>
            <i className='fas fa-globe fa-2x' />
          </a>
        )}
        {contacts && contacts.twitter && (
          <a href={contacts.twitter} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-twitter fa-2x' />
          </a>
        )}
        {contacts && contacts.facebook && (
          <a href={contacts.facebook} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-facebook fa-2x' />
          </a>
        )}
        {contacts && contacts.linkedin && (
          <a href={contacts.linkedin} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-linkedin fa-2x' />
          </a>
        )}
        {contacts && contacts.youtube && (
          <a href={contacts.youtube} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-youtube fa-2x' />
          </a>
        )}
        {contacts && contacts.instagram && (
          <a
            href={contacts.instagram}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-instagram fa-2x' />
          </a>
        )}
      </div>
    </div>
  );
};

ProfileContact.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileContact;
