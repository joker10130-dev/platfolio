import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteProject } from '../../actions/profile';

const Project = ({ project, deleteProject }) => {
  let projects;
  if (project) {
    projects = project.map(pro => (
      <tr key={pro._id}>
        <td>{pro.name}</td>
        <td className='hide-sm'>{pro.description}</td>
        <td>
          {pro.skills.slice(0, 4).map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </td>
        <td>
          {pro.youtube && (
            <a href={pro.youtube}>
              <i className='fab fa-youtube fa-2x' />
            </a>
          )}
          {pro.web && (
            <a href={pro.web}>
              <i className='fas fa-globe fa-2x' />
            </a>
          )}
          {pro.github && (
            <a href={pro.github}>
              <i className='fab fa-github fa-2x' />
            </a>
          )}
        </td>
        <td>
          <button
            onClick={() => deleteProject(pro._id)}
            className='btn btn-danger'
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  }

  return (
    <Fragment>
      <h2 className='my-2'>Project Credentials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th className='hide-sm'>Description</th>
            <th className='hide-sm'>Skills</th>
            <th className='hide-sm'>Links</th>
            <th />
          </tr>
        </thead>
        <tbody>{projects}</tbody>
      </table>
    </Fragment>
  );
};

Project.propTypes = {
  project: PropTypes.array.isRequired,
  deleteProject: PropTypes.func.isRequired
};

export default connect(null, { deleteProject })(Project);
