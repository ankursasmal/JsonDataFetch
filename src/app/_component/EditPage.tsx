// _component/EditPage.tsx

import React, { FC } from 'react';

interface EditPageProps {
  id: number;
}

const EditPage: FC<EditPageProps> = ({ id }) => {
  // Your component logic here
  return <div>Editing item with ID: {id}</div>;
};

export default EditPage;
