import { Fragment } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { connect } from 'react-redux';
import { deleteEducation } from '../../actions/profile';

dayjs.extend(utc);

const Education = ({ education = [], deleteEducation }) => {
if (!Array.isArray(education) || education.length === 0) {
    return (
      <Fragment>
        <h2 className='my-2'>Education Credentials</h2>
        <p>No education credentials found.</p>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <h2 className='my-2'>Education Credentials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>School</th>
            <th className='hide-sm'>Degree</th>
            <th className='hide-sm'>Years</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {education.map(edu => (
            <tr key={edu._id}>
              <td>{edu.school}</td>
              <td className='hide-sm'>{edu.degree}</td>
              <td>
                {dayjs.utc(edu.from).format('YYYY/MM/DD')} -{' '}
                {edu.current || !edu.to
                  ? 'Now'
                  : dayjs.utc(edu.to).format('YYYY/MM/DD')}
              </td>
              <td>
                <button
                  onClick={() => deleteEducation(edu._id)}
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

Education.propTypes = {
  education: PropTypes.array,
  deleteEducation: PropTypes.func.isRequired
};

export default connect(null, { deleteEducation })(Education);
