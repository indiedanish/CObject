import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';

import SidebarLayout from 'src/layouts/SidebarLayout';
import ProjectPageSidebarLayout from 'src/layouts/SingleProjectPageSidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );


// Dashboards

const ProjectsScreen = Loader(lazy(() => import('src/content/dashboards/ProjectsScreen')));
const SingleProjectsScreen = Loader(lazy(() => import('src/content/dashboards/SingleProjectScreen')));
const UploadImages = Loader(lazy(() => import('src/content/dashboards/UploadImages')));


const Overview = Loader(lazy(() => import('src/content/overview')));



const routes = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Overview />
      },
      {
        path: 'login',
        element: <Navigate to="/" replace />
      },
      
      
    ]
  },
  {
    path: 'dashboard',
    element: <SidebarLayout />,
    children: [
    
      {
        path: 'projects',
        element: <ProjectsScreen />
      },

      
     
    ]
  },

  {
    path: 'singleProject',
    element: <ProjectPageSidebarLayout />,
    children: [
      {
        path: '',
        element: <SingleProjectsScreen />
      },
      {
        path: 'projects',
        element: <ProjectsScreen />
      },

     
    ]
  },
  ,

  {
    path: 'uploadImages',
    element: <ProjectPageSidebarLayout />,
    children: [
      {
        path: '',
        element: <UploadImages />
      },
      
    ]
  },
  ];

export default routes;
