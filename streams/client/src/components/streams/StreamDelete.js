import React, { useEffect } from 'react';
import Modal from '../Modal';
import history from '../../history';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { fetchStream, deleteStream } from '../../actions';

const StreamDelete = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const stream = useSelector((state) => state.streams[id]);

  useEffect(() => {
    dispatch(fetchStream(id));
    //this runs on every refresh, not optimal - look at streamedit/show. maybe try/catch?
  }, [dispatch, id]);

  const onDeleteClick = () => {
    dispatch(deleteStream(id));
  };

  const renderActions = () => {
    return (
      <>
        <button className="ui negative button" onClick={onDeleteClick}>
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </>
    );
  };

  const renderContent = () => {
    if (!stream) {
      return 'Are you sure you want to delete this stream?';
    }
    return `Are you sure you want to delete ${stream.title}`;
  };

  return (
    <Modal
      title="Delete Stream"
      content={renderContent()}
      actions={renderActions()}
      onDismiss={() => history.push('/')}
    />
  );
};

export default StreamDelete;
