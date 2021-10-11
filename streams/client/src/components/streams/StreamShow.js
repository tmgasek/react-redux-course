import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchStream } from '../../actions';

const StreamShow = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const stream = useSelector((state) => state.streams[id]);

  useEffect(() => {
    if (!stream) {
      dispatch(fetchStream(id));
    }
  }, [dispatch, id, stream]);

  if (!stream) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{stream.title}</h1>
      <h5>{stream.description}</h5>
    </div>
  );
};

export default StreamShow;
