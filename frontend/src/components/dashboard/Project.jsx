import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteProject } from '../../actions/profile';

const Project = ({ project = [], deleteProject }) => {
  if (!Array.isArray(project) || project.length === 0) {
    return (
      <Fragment>
        <h2 className='my-2'>Project Credentials</h2>
        <p>No projects added</p>
      </Fragment>
    );
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
        <tbody>
          {project.map(pro => (
            <tr key={pro._id}>
              <td>{pro.name}</td>
              <td className='hide-sm'>{pro.description}</td>
              <td>
                {Array.isArray(pro.skills) &&
                  pro.skills.slice(0, 4).map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
              </td>
              <td>
                {pro.youtube && (
                  <a href={pro.youtube} target='_blank' rel='noopener noreferrer'>
                    <i className='fab fa-youtube fa-2x' />
                  </a>
                )}
                {pro.web && (
                  <a href={pro.web} target='_blank' rel='noopener noreferrer'>
                    <i className='fas fa-globe fa-2x' />
                  </a>
                )}
                {pro.github && (
                  <a href={pro.github} target='_blank' rel='noopener noreferrer'>
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
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

Project.propTypes = {
  project: PropTypes.array,
  deleteProject: PropTypes.func.isRequired
};

export default connect(null, { deleteProject })(Project);