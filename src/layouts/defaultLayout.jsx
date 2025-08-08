import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
  return (
    <div className='p-section container-full overflow-x-hidden overflow-y-visible'>
      {/* MAIN ---------------------------- */}
      <main
        data-id='main'
        className='container-responsive font-body-base-normal text-base-content'>
        <Outlet />
      </main>
    </div>
  );
}
