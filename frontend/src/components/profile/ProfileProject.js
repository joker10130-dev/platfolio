import React from 'react';
import PropTypes from 'prop-types';

const ProfileProject = ({
  projects: { skills, name, description, web, youtube, github }
}) => (
  <div>
    <h3 className='text-dark'>{name}</h3>
    <p>
      <strong>Description: </strong> {description}
    </p>
    <p>
      <strong>Skills: </strong>{' '}
      {skills.map((skill, index) => (
        <div key={index} className='p-1'>
          <i className='fas fa-check' /> {skill}
        </div>
      ))}
    </p>
    <p>
      <strong>Website: </strong> {web}
    </p>
    <p>
      <strong>Youtube: </strong> {youtube}
    </p>
    <p>
      <strong>Github: </strong> {github}
    </p>
  </div>
);

ProfileProject.propTypes = {
  projects: PropTypes.object.isRequired
};

export default ProfileProject;
