import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const getAppState = () =>
  Promise.resolve({
    theme: localStorage.getItem('tidy-ui.theme'),
  });

const updateAppState = (data: any) => {
  return new Promise((resolve) => {
    localStorage.setItem('tidy-ui.theme', data.theme);
    resolve(true);
  });
};

export const useReadApp = () => {
  return useQuery(['app'], () => getAppState());
};

export const useUpdateApp = () => {
  const qc = useQueryClient();
  return useMutation((data: any) => updateAppState(data), {
    onSuccess: () => qc.invalidateQueries(['app']),
  });
};
