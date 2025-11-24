import { useQuery, type UseQueryResult } from '@tanstack/react-query';

import type { SiteData } from '@/api/schemas';

import { apiManager } from '@/api/manager';
import { queryKeys } from '@/api/query-client';

export const useSiteData = (): UseQueryResult<SiteData> =>
  useQuery({
    queryKey: queryKeys.siteData,
    queryFn: () => apiManager.getSiteData(),
  });
