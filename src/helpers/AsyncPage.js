import { lazy } from 'react';

export const createAsyncPages = componentName => {
  return lazy(() => {
    return import(`../views/${componentName}/${componentName}`)
  });
};