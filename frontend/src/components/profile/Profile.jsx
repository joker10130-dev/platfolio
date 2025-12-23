import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileContact from './ProfileContact';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import ProfileProject from './ProfileProject';
import { getProfileById } from '../../actions/profile';

const Profile = ({
  getProfileById,
  profile: { profile, loading },
  auth,
  match
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Link to='/portfolio' className='btn btn-light'>
            Back To Profiles
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to='/edit-profile' className='btn btn-dark'>
                Edit Profile
              </Link>
            )}

          <div className='row'>
            <div className='col-sm-8 col-xs-12'>
              <div className='row'>
                <div className='col-sm-12'>
                  <ProfileTop profile={profile} />
                </div>
                <div className='col-sm-6 col-xs-12'>
                  <div className='profile-exp bg-white p-2'>
                    <h2 className='text-primary'>Experience</h2>
                    {profile.experience.length > 0 ? (
                      <Fragment>
                        {profile.experience.map(experience => (
                          <ProfileExperience
                            key={experience._id}
                            experience={experience}
                          />
                        ))}
                      </Fragment>
                    ) : (
                      <h4>No experience credentials</h4>
                    )}
                  </div>
                </div>
                <div className='col-sm-6 col-xs-12'>
                  <div className='profile-edu bg-white p-2'>
                    <h2 className='text-primary'>Education</h2>
                    {profile.education.length > 0 ? (
                      <Fragment>
                        {profile.education.map(education => (
                          <ProfileEducation
                            key={education._id}
                            education={education}
                          />
                        ))}
                      </Fragment>
                    ) : (
                      <h4>No education credentials</h4>
                    )}
                  </div>
                </div>
                <div className='col-sm-12 col-xs-12'>
                  <div className='profile-pro bg-white p-2'>
                    <h2 className='text-primary'>Project</h2>
                    {profile.projects.length > 0 ? (
                      <Fragment>
                        {profile.projects.map(pro => (
                          <ProfileProject key={pro._id} projects={pro} />
                        ))}
                      </Fragment>
                    ) : (
                      <h4>No education credentials</h4>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-4 col-xs-12'>
              <div className='row'>
                <div className='col-sm-12 col-xs-12'>
                  <ProfileAbout profile={profile} />
                </div>
                <div className='col-sm-12 col-xs-12'>
                  <ProfileContact profile={profile} />
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getProfileById })(Profile);
