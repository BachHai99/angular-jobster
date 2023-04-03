import { createReducer, on } from '@ngrx/store';
import { showLoading, hideLoading } from './all-jobs.action';
import { IAllJobs } from './all-jobs.interface';

export const initialstate: IAllJobs = {
  search: '',
  // searchStatus: 'all',
  // searchType: 'all',
  // sort: 'latest',
  // sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
  isLoading: true,
  // jobs: [],
  // totalJobs: 0,
  // numOfPages: 1,
  // pages: 1,
  // stats: {},
  // monthlyApplications: [],
};

export const allJobsReducer = createReducer(
  initialstate,
  // on(showLoading, (state) => state = true),
  on(showLoading, (state) => {
    return { ...state, isLoading: true };
  }),
  // on(decremnet, (state) => state - 1),
  // on(reset, (state) => 0)
  on(hideLoading, (state) => {
    return { ...state, isLoading: false };
  })
);
