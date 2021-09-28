import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { fetchStream } from '../../actions';

const StreamEdit = () => {
  const { id } = useParams();
  const stream = useSelector((state) => state.streams[id]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!stream) {
      dispatch(fetchStream(id));
      console.log('use effect ran');
    }
  }, [dispatch, id, stream]);

  console.log('stream to edit:', stream);
  console.log(id);

  if (!stream) {
    return null;
  }

  return <div> {stream.title}</div>;
};

export default StreamEdit;
