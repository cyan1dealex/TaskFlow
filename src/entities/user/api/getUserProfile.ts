import { supabase } from '@shared/api'
import { mapperProfileDtoToUserProfile } from './mappers'
import type { UserProfile, UserProfileDto } from '../model/types'

export const getUserProfile = async (userId: string): Promise<UserProfile | null> => {
    const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single()

    if (error) {
        if (error.code === 'PGRST116') {
            return null
        }
        throw new Error(error.message)
    }

    return mapperProfileDtoToUserProfile(data as UserProfileDto)
}
