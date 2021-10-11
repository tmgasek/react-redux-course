import React from 'react';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';
import { useDispatch } from 'react-redux';

const StreamCreate = () => {
  const dispatch = useDispatch();

  const onSubmit = (formValues) => {
    dispatch(createStream(formValues));
  };

  return (
    <div>
      <h3>Create a Stream</h3>
      <StreamForm onSubmit={onSubmit} />
    </div>
  );
};

export default StreamCreate;
