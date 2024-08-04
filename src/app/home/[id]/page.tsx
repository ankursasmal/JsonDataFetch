// pages/edit/[id].tsx

import { useRouter } from 'next/router';
import EditPage from '../../_component/EditPage';

const Page = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return null; // Optional: Render nothing or a loading state while `id` is undefined

  // Ensure `id` is a string and convert to number
  const parsedId = Array.isArray(id) ? id[0] : id;
  const numericId = Number(parsedId);

  if (isNaN(numericId)) {
    return <div>Invalid ID</div>; // Optional: Render an error state if ID is not a valid number
  }

  return (
    <div>
      <EditPage id={numericId} />
    </div>
  );
};

export default Page;
