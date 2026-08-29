import { UserProfileDto, UserProfile } from '../model/types'

export const mapperProfileDtoToUserProfile = (dto: UserProfileDto): UserProfile => {
    return {
        id: dto.id,
        username: dto.display_name,
        email: dto.email,
        avatarUrl: dto.avatar_url,
        createdAt: dto.created_at,
    }
}
