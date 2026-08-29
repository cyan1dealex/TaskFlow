export interface UserProfile {
    id: string
    username: string
    email: string
    avatarUrl?: string | null
    createdAt: string
}

export interface UserProfileDto {
    id: string
    email: string
    display_name: string
    avatar_url: string | null
    created_at: string
}
