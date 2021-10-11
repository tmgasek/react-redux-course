import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchStream, editStream } from '../../actions';

import StreamForm from './StreamForm';

const StreamEdit = () => {
  const { id } = useParams();
  const stream = useSelector((state) => state.streams[id]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!stream) {
      dispatch(fetchStream(id));
    }
  });

  const onSubmit = (formValues) => {
    dispatch(editStream(id, formValues));
  };

  if (!stream) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h3>Edit a stream</h3>
      <StreamForm
        initialValues={{
          title: stream.title,
          description: stream.description,
        }}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default StreamEdit;
