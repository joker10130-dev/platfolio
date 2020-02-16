import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addProject } from '../../actions/profile';

const AddProject = ({ addProject, history }) => {
  const [formData, setFormData] = useState({
    name: '',
    youtube: '',
    web: '',
    github: '',
    skills: '',
    description: ''
  });

  const { name, youtube, web, github, skills, description } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className='large text-primary'>Add A Project</h1>
      <p className='lead'>
        <i className='fas fa-code-branch' /> Add any developer/programming
        project that you have done in the past
      </p>
      <small>* = required field</small>
      <form
        className='form'
        onSubmit={e => {
          e.preventDefault();
          addProject(formData, history);
        }}
      >
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Title of the Project'
            name='name'
            value={name}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Skills'
            name='skills'
            value={skills}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
          </small>
        </div>
        <div className='form-group'>
          <textarea
            name='description'
            cols='30'
            rows='5'
            placeholder='* Project Description'
            value={description}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group social-input'>
          <i className='fas fa-globe fa-2x' />
          <input
            type='text'
            placeholder='Website URL showcase your project'
            name='web'
            value={web}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group social-input'>
          <i className='fab fa-youtube fa-2x' />
          <input
            type='text'
            placeholder='YouTube URL showcase your project'
            name='youtube'
            value={youtube}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group social-input'>
          <i className='fab fa-github fa-2x' />
          <input
            type='text'
            placeholder='Github URL showcase your project'
            name='github'
            value={github}
            onChange={e => onChange(e)}
          />
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddProject.propTypes = {
  addProject: PropTypes.func.isRequired
};

export default connect(null, { addProject })(withRouter(AddProject));
