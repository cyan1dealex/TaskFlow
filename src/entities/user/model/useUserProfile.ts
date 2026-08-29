import { useQuery } from '@tanstack/react-query'
import { getUserProfile } from '../api/getUserProfile'

export const userQueryKeys = {
    profile: (userId: string) => ['user', 'profile', userId] as const,
}

export const useUserProfile = (userId?: string | null) => {
    const data = useQuery({
        queryKey: userQueryKeys.profile(userId ?? ''),
        queryFn: () => getUserProfile(userId!),
        enabled: Boolean(userId),
        staleTime: 1000 * 60 * 5,
    })

    return data
}
