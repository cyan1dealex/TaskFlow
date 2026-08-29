export type { UserProfile } from './model/types'
export type { UserProfileDto } from './model/types'

export { mapperProfileDtoToUserProfile } from './api/mappers'
export { getUserProfile } from '@entities/user/api/getUserProfile'
export { useUserProfile } from '@entities/user/model/useUserProfile'
