import { Fragment } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { connect } from 'react-redux';
import { deleteExperience } from '../../actions/profile';

dayjs.extend(utc);

const Experience = ({ experience = [], deleteExperience }) => {
  if (!Array.isArray(experience) || experience.length === 0) {
    return (
      <Fragment>
        <h2 className='my-2'>Experience Credentials</h2>
        <p>No experience added yet.</p>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <h2 className='my-2'>Experience Credentials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Company</th>
            <th className='hide-sm'>Title</th>
            <th className='hide-sm'>Years</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {experience.map(exp => (
            <tr key={exp._id}>
              <td>{exp.company}</td>
              <td className='hide-sm'>{exp.title}</td>
              <td>
                {dayjs.utc(exp.from).format('YYYY/MM/DD')} -{' '}
                {exp.current || !exp.to
                  ? 'Now'
                  : dayjs.utc(exp.to).format('YYYY/MM/DD')}
              </td>
              <td>
                <button
                  onClick={() => deleteExperience(exp._id)}
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

Experience.propTypes = {
  experience: PropTypes.array,
  deleteExperience: PropTypes.func.isRequired
};

export default connect(null, { deleteExperience })(Experience);
